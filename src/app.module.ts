import { Module } from '@nestjs/common';
import { authModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [authModule, UserModule, BookmarkModule],
})
export class AppModule {}
