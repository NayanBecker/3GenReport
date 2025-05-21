-- CreateTable
CREATE TABLE "T_Account" (
    "id_Account" SERIAL NOT NULL,
    "nome_Account" TEXT NOT NULL,
    "email_Account" TEXT NOT NULL,
    "password_Account" TEXT NOT NULL,
    "createdAt_Account" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt_Account" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "T_Account_pkey" PRIMARY KEY ("id_Account")
);

-- CreateTable
CREATE TABLE "T_Report" (
    "id_Report" TEXT NOT NULL,
    "content_Report" TEXT,
    "createdAt_Report" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt_Report" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "T_Report_pkey" PRIMARY KEY ("id_Report")
);

-- CreateIndex
CREATE UNIQUE INDEX "T_Account_email_Account_key" ON "T_Account"("email_Account");
