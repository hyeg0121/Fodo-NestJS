export interface FocusRecordDto {
  id: string;
  focusId: string;
  concentrateSeconds: number;
  memo: string;
  uploadedImagePath: string;
  createdAt: Date;
  updatedAt: Date;
  idsDeleted: boolean;
}