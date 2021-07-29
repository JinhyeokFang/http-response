## Usage

```typescript
import { InternalServerError, responseSuccess, errorHandling } from 'ts-response';

try {
    if (true) {
        throw new InternalServerError('Error');
    }

    responseSuccess(res, {});
} catch (error) {
    errorHandling(res, error);
}

// response: internal server error (500)
```
## response
- responseSuccess(res: Response, {data?: Record<string, unknown>})
- responseSuccessWithPage(res: Response, {errorMessage?: string})
- responseBadRequest(res: Response, {errorMessage?: string})
- responseUnauthorized(res: Response, {errorMessage?: string})
- responseForbidden(res: Response, {errorMessage?: string})
- responseConflict(res: Response, {errorMessage?: string})
- responseInternalServerError(res: Response, {errorMessage?: string})

## error
- BadRequestError(message: string)
- UnauthorizedError(message: string)
- ForbiddenError(message: string)
- NotFoundError(message: string)
- ConflictError(message: string)
- InternalServerError(message: string)

## handling error
- errorHandling(res: Response, error: Error)