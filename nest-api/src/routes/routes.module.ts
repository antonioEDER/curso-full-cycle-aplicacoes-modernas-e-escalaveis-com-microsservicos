import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RoutesModule,
    MongooseModule.forRoot(process.env.MONGO_DSN),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class RoutesModule {}
