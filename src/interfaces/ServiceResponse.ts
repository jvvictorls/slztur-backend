export type ServiceMessage = {message: string};

type ServiceResponseErrorType = 'INVALID_DATA' | 
'INTERNAL_ERROR' |
'NOT_FOUND' |
'CONFLICT' |
'UNAUTHORIZED';

export type serviceResponseError = {
  status: ServiceResponseErrorType;
  message: string;
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL';
  data: T;
};


export type ServiceResponse <T> = ServiceResponseSuccess<T> | serviceResponseError;