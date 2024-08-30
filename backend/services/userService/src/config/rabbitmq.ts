import amqp,{Channel,Connection} from 'amqplib'
import { Request, Response } from 'express';

let channel: Channel
let connection:Connection

export const connectRabbitMQ = async (req: Request, res: Response) => {
    try {
        connection = await amqp.connect('amqp://localhost')
        console.log('rabbit mq connected');
        channel = await connection.createChannel();
    } catch (error) {
        console.error('Failed to connect to rabbitmq',error);   
    }
}

export const getChannel = () => channel