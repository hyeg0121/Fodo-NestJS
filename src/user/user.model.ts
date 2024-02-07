export interface UserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  profileImagePath: string;
  bio: string;
  created_at: Date;
  updated_at?: Date;
}
