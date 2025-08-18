'use server';

const baseUrl = 'https://fakestoreapi.com';

type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE';

const httpRequest = async (
  endpoint: string,
  method: HttpMethod,
  nextConfig?: NextFetchRequestConfig | null
) => {
  const response = await fetch(
    `${baseUrl}${endpoint}`,
    {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      ...(nextConfig !== null && {
        next: nextConfig,
      }),
    }
  );

  return response;
};

const post = async (
  endpoint: string,
  nextConfig?: NextFetchRequestConfig | null
) => httpRequest(endpoint, 'POST', nextConfig);
const get = async (
  endpoint: string,
  nextConfig?: NextFetchRequestConfig | null
) => httpRequest(endpoint, 'GET', nextConfig);
const put = async (
  endpoint: string,
  nextConfig?: NextFetchRequestConfig | null
) => httpRequest(endpoint, 'PUT', nextConfig);
const patch = async (
  endpoint: string,
  nextConfig?: NextFetchRequestConfig | null
) => httpRequest(endpoint, 'PATCH', nextConfig);
const destroy = async (
  endpoint: string,
  nextConfig?: NextFetchRequestConfig | null
) => httpRequest(endpoint, 'DELETE', nextConfig);

export { destroy, get, patch, post, put };
