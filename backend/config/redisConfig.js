import { createClient } from 'redis';

const createRedisClient = async () => {
    const client = createClient({
        password: 'WTPjt189fsSsjHfJJiH2aOe6ykvdPR6Y',
        socket: {
            host: 'redis-13353.c264.ap-south-1-1.ec2.redns.redis-cloud.com',
            port: 13353
        }
    });

    client.on('connect', () => {
        console.log('Redis client connected');
    });

    client.on('ready', () => {
        console.log('Redis client is ready');
    });

    client.on('error', (err) => {
        console.error('Redis client error:', err);
    });

    client.on('end', () => {
        console.log('Redis client disconnected');
    });

    await client.connect();

    return client;
};

export default createRedisClient;
