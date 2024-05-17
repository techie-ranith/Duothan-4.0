"use client";

import React from 'react'
import InfoTable from "@/components/layouts/InfoTable";

const paymentColumns = [
  { id: 'paymentId', label: 'Payment ID' },
  { id: 'amount', label: 'Amount' },
  { id: 'date', label: 'Date' },
  { id: 'status', label: 'Status' },
];

const paymentData = [
  { id: 1, paymentId: "P001", amount: "100.00", date: "2023-05-17", status: "Completed" },
  // Add more payment data as needed
];

const PaymentInfoPage = () => {
  return (
    <div>
      <h1>Payment Information</h1>
      <InfoTable columns={paymentColumns} rows={paymentData} />
    </div>
  );
};

export default PaymentInfoPage;
