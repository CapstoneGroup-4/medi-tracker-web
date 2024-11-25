/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachment } from "./Attachment";
import type { Doctor } from "./Doctor";
import type { User } from "./User";
export type MedicalRecord = {
  id?: number;
  patientName?: string;
  doctorName?: string;
  gender?: number;
  comment?: string;
  recordId?: string;
  clinicName?: string;
  dateOfBirth?: string;
  recordNo?: string;
  sin?: string;
  nik?: string;
  primaryDiagnosis?: string;
  dateOfDiagnosis?: string;
  doctorsNotes?: string;
  treatmentPlan?: string;
  age?: number;
  nextSteps?: string;
  treatmentStatus?: string;
  physicianName?: string;
  medicationName?: string;
  dosage?: string;
  frequency?: string;
  duration?: string;
  instructions?: string;
  prescribingDoctor?: string;
  attachments?: Array<Attachment>;
  patient?: User;
  doctor?: Doctor;
  deleted?: boolean;
};
export type MedicalRecordCreate = {
  userEmail: string;
  primaryDiagnosis: string;
  dateOfDiagnosis: string;
  comment: string;
  doctorId: number;
};
