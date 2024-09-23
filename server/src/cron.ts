import cron from 'node-cron';
import { cachePhishlists } from './utils';

export function startCron() {
    cachePhishlists();
    cron.schedule('*/10 * * * *', () => {
        console.log('Caching phishlists...');
        cachePhishlists();
    });
}
