export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://your-hosting-domain.com';

export const getApiUrl = (path: string) => {
  return `${API_BASE_URL}${path}`;
};

export const DB_CONFIG = {
  host: '204.10.193.119',
  user: 'u53_oiXambs0YR',
  password: 'EjRk1PTmxYL!gh!bO7MQpgaq',
  database: 's53_sarp'
}; 