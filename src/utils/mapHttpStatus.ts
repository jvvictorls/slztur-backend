//Função para tratar os mais diferentes tipos de status HTTP

export default function mapStatusHTTP(status: string): number {
  switch (status) {
    case 'SUCCESSFUL': return 200;
    case 'NOT_FOUND': return 404;
    case 'CONFLICT': return 409;
    case 'UNAUTHORIZED': return 401;
    case 'INTERNAL_SERVER_ERROR': return 500;
    case 'CREATED': return 201;
    case 'UNPROCESSABLE_ENTITY': return 422;
    case 'BAD_REQUEST': return 400;
    default: return 500;
  }
}