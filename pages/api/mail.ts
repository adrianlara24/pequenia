const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_TOKEN);

export default (req: any, res: any) => {

    const { nombre, correo, telefono, producto } = JSON.parse(req.body);

    const data = {
        to: process.env.SENDGRID_EMAIL,
        from: correo,
        subject: 'Mi Pequeña Belene',
        text: `Nombre: ${nombre}, Telefono: ${telefono}, producto: ${producto}`,
    }

    mail.send(data);

    return res.status(200).json({ status: 'OK' });
}