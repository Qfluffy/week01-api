// converter.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ConverterService } from './converter.service.js';

@Controller('converter')
export class ConverterController {
  constructor(private readonly converterService: ConverterService) { }

  @Get()
  find() {
    console.log('1 เข้าสู่ Controller');
    const result = this.converterService.doWork();
    console.log('3 กลับมาที่ Controller');
    return result;   // ไม่ต้องแปลงเป็น JSON เอง

  }
}