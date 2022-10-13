import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, version } from 'mongoose';

export type ProductDocument = Product & Document;

// { collection: 'products' }
@Schema({ versionKey: false })
export class Product {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop()
    color: string;

    @Prop()
    price: number;

    @Prop({ default: true })
    status: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

