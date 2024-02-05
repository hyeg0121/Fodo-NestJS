export interface UserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  profile_image_path: string;
  bio: string;
  created_at: Date;
  updated_at?: Date;
}
