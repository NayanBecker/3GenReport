import { PrismaClient } from '@prisma/client';
const db = new PrismaClient()

interface createReport {
  content_Report: string;
  createdAt_Report: Date;
  updatedAt_Report: Date;
  id_Account: number;
}


export async function createReportService(data: createReport) {

  const createReport = await db.report.create({
    data: {
      content_Report: data.content_Report,
      createdAt_Report: data.createdAt_Report,
      updatedAt_Report: data.updatedAt_Report,
      id_Account: data.id_Account
    }
  });
  return createReport;
}
