/**
 * Simple test script for the Chat APIs
 * Run with: node test-apis.js
 *
 * Note: Make sure the Next.js dev server is running on port 3000
 */

const BASE_URL = 'http://localhost:3000';

async function testEmbedChatAPI() {
  console.log('\n=== Testing Embed Chat API ===\n');

  // Test 1: Create chat with auto-generated report ID
  console.log('Test 1: Create chat session with auto-generated report ID');
  const response1 = await fetch(`${BASE_URL}/api/embed-chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({})
  });
  const data1 = await response1.json();
  console.log('Response:', JSON.stringify(data1, null, 2));
  console.log('Status:', response1.status);

  // Test 2: Create chat with specific report ID
  console.log('\nTest 2: Create chat session with specific report ID');
  const response2 = await fetch(`${BASE_URL}/api/embed-chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reportId: 'RPT-TEST-123' })
  });
  const data2 = await response2.json();
  console.log('Response:', JSON.stringify(data2, null, 2));
  console.log('Status:', response2.status);

  // Test 3: Try to get existing chat for same report ID
  console.log('\nTest 3: Retrieve existing chat session for same report ID');
  const response3 = await fetch(`${BASE_URL}/api/embed-chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reportId: 'RPT-TEST-123' })
  });
  const data3 = await response3.json();
  console.log('Response:', JSON.stringify(data3, null, 2));
  console.log('Status:', response3.status);

  return data1.chatId; // Return chatId for next test
}

async function testChatAPI(chatId) {
  console.log('\n=== Testing Chat API ===\n');

  // Test 1: Send a greeting message
  console.log('Test 1: Send greeting message');
  const response1 = await fetch(`${BASE_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chatId,
      message: 'Hello! Can you help me with this report?'
    })
  });
  const data1 = await response1.json();
  console.log('Response:', JSON.stringify(data1, null, 2));
  console.log('Status:', response1.status);

  // Test 2: Ask for summary
  console.log('\nTest 2: Ask for summary');
  const response2 = await fetch(`${BASE_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chatId,
      message: 'Can you give me a summary of the key findings?'
    })
  });
  const data2 = await response2.json();
  console.log('Response:', JSON.stringify(data2, null, 2));
  console.log('Status:', response2.status);

  // Test 3: Missing chatId (should fail)
  console.log('\nTest 3: Missing chatId (should return 400 error)');
  const response3 = await fetch(`${BASE_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: 'This should fail'
    })
  });
  const data3 = await response3.json();
  console.log('Response:', JSON.stringify(data3, null, 2));
  console.log('Status:', response3.status);

  // Test 4: Invalid chatId (should fail)
  console.log('\nTest 4: Invalid chatId (should return 404 error)');
  const response4 = await fetch(`${BASE_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chatId: 'INVALID-CHAT-ID',
      message: 'This should fail'
    })
  });
  const data4 = await response4.json();
  console.log('Response:', JSON.stringify(data4, null, 2));
  console.log('Status:', response4.status);
}

async function runTests() {
  try {
    console.log('Starting API tests...');
    console.log('Make sure Next.js dev server is running on port 3000\n');

    const chatId = await testEmbedChatAPI();
    await testChatAPI(chatId);

    console.log('\n=== All tests completed ===\n');
  } catch (error) {
    console.error('Error running tests:', error.message);
    console.log('\nMake sure the Next.js dev server is running:');
    console.log('  npm run dev');
  }
}

runTests();
