export const fetchFakeLogin = async (ip: string) => {
  const res = await fetch(`/api/fake_login/${ip}`, {
    method: "GET",
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    console.error("Failed to fetch: ", res.status, res.statusText);
    return { error: `Failed to fetch: ${res.status} ${res.statusText}` };
  }
  
  if (res.headers.get('content-length') === '0') {
    console.error("No data returned from the server.");
    return { error: "No data returned from the server" };
  }
  
  try {
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return { error: "Error parsing JSON" };
  }
};