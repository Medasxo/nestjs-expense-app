import { ReportService } from './report.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { ReportType } from 'src/data';
import {
  CreateReportDto,
  ReportResponseDto,
  UpdateReportDto,
} from 'src/dtos/report.dto';

@Controller('report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
  ): ReportResponseDto[] {
    return this.reportService.getAllReports(type);
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    return this.reportService.getReportById(type, id);
  }

  @Post()
  createReport(
    @Body() { amount, source }: CreateReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
  ): ReportResponseDto {
    return this.reportService.createReport(type, { amount, source });
  }

  @Put(':id')
  updateReport(
    @Body() { amount, source }: UpdateReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    return this.reportService.updateReport(type, id, { amount, source });
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    this.reportService.deleteReport(id);
  }
}
