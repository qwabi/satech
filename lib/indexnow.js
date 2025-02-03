const axios = require('axios');
const xml2js = require('xml2js');

// Configuration
const sitemapUrl = 'https://satechdstv.ayabonga.com/sitemap-0.xml'; // TODO: Update
const host = 'https://satechdstv.ayabonga.com'; // TODO: Update
const key = '6bf7ee8be57240b59cfc72682f9a4a46'; // TODO: Update
const keyLocation =
  'https://satechdstv.ayabonga.com/6bf7ee8be57240b59cfc72682f9a4a46.txt'; // TODO: Update

// Get modified date from CLI args or default to 1970-01-01
const modifiedSinceDate = new Date(process.argv[2] || '1970-01-01');

if (isNaN(modifiedSinceDate.getTime())) {
  console.error('❌ Invalid date provided. Please use format YYYY-MM-DD');
  process.exit(1);
}

// Fetch sitemap from URL
async function fetchSitemap(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('❌ Error fetching sitemap:', error.message);
    throw error;
  }
}

// Parse XML sitemap
async function parseSitemap(xmlData) {
  try {
    return await xml2js.parseStringPromise(xmlData);
  } catch (error) {
    console.error('❌ Error parsing sitemap XML:', error.message);
    throw error;
  }
}

// Filter URLs by last modified date
function filterUrlsByDate(sitemap, date) {
  if (!sitemap.urlset || !sitemap.urlset.url) {
    console.error('❌ Invalid sitemap structure');
    return [];
  }

  return sitemap.urlset.url
    .filter((url) => {
      const lastmodDate = url.lastmod ? new Date(url.lastmod[0]) : null;
      return lastmodDate && lastmodDate > date;
    })
    .map((url) => url.loc[0]);
}

// Submit URLs to IndexNow API
async function postToIndexNow(urlList) {
  if (urlList.length === 0) {
    console.log('✅ No URLs modified since the specified date.');
    return;
  }

  try {
    const response = await axios.post(
      'https://api.indexnow.org/IndexNow',
      {
        host,
        key,
        keyLocation,
        urlList,
      },
      {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }
    );

    console.log(
      '✅ IndexNow API Response:',
      response.status,
      response.statusText
    );
    console.log('📨 Data:', response.data);
  } catch (error) {
    console.error('❌ Error submitting to IndexNow:', error.message);
  }
}

// Main function
async function main() {
  try {
    console.log('🔄 Fetching sitemap...');
    const xmlData = await fetchSitemap(sitemapUrl);

    console.log('📂 Parsing sitemap XML...');
    const sitemap = await parseSitemap(xmlData);

    console.log(
      '📅 Filtering URLs modified after:',
      modifiedSinceDate.toISOString()
    );
    const filteredUrls = filterUrlsByDate(sitemap, modifiedSinceDate);

    console.log('🔗 URLs to submit:', filteredUrls.length);
    await postToIndexNow(filteredUrls);
  } catch (error) {
    console.error('❌ An error occurred:', error.message);
  }
}

main();
