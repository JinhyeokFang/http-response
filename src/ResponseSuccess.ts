import { Response } from 'express';
import { ResponseSuccessBody } from './ResponseBody';

export function responseOK(res: Response, body: ResponseSuccessBody): void {
  res.status(200).json(body);
}

export function responseOKWithPage(res: Response, pageName: string): void {
  res.render(pageName);
}

export function responseOKWithFile(res: Response, filePath: string): void {
  res.sendFile(filePath);
}

export function responseCreated(res: Response, body: ResponseSuccessBody): void {
  res.status(201).json(body);
}

export function responseAccepted(res: Response, body: ResponseSuccessBody): void {
  res.status(202).json(body);
}

export function responseNoContent(res: Response, body: ResponseSuccessBody): void {
  res.status(204).json(body);
}

