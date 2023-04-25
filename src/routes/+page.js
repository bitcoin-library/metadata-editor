export async function load({ url }) {
  let name = decodeURIComponent(url.searchParams.get('name') ?? "");
  let id = decodeURIComponent(url.searchParams.get('id') ?? "");
  let description = decodeURIComponent(url.searchParams.get('description') ?? "");
  let image = decodeURIComponent(url.searchParams.get('image') ?? "");
  return { name, id, description, image };
}
