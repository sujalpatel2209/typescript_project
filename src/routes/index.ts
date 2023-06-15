import healthRoutes from './health.route';

const appRoutes = (app: any) => {
    app.use('/api/v1/', healthRoutes)
}

export default appRoutes;