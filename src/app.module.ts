import { Module, Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './models/product.entity';
import { User } from './models/user.entity';
import { ProductsService } from './models/products.service';
import { UsersService } from './models/users.service';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { Order } from './models/order.entity';
import { Item } from './models/item.entity';
import { OrdersService } from './models/orders.service';
import { AccountModule } from './account/account.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'user2022',
      database: 'online_store',
      entities: [Product, User, Order, Item],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product, User, Order, Item]),
    AdminModule,
    AuthModule,
    CartModule,
    AccountModule,
  ],
  controllers: [AppController, ProductsController],
  providers: [ProductsService, UsersService, OrdersService],
  exports: [ProductsService, UsersService, OrdersService],
})
export class AppModule {}
