import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import Jimp from "jimp";
import { v4 as uuidv4 } from "uuid";

const app = express();


const __dirname = import.meta.dirname;

app.use(express.static("public"));
app.use(
    "/assets/css",
    express.static(__dirname + "/node_modules/bootstrap/dist/css")
);
app.use(
    "/assets/js",
    express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);
app.use(
    "/assets/img",
    express.static(path.join(__dirname, "/node_modules/bootstrap/dist/img"))
);



app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("home", { title: "Conversor de imagenes a blanco y negro" });
});

//3. El formulario debe redirigir a otra ruta del servidor que deberá procesar la imagen tomada por la URL enviada del formulario con el paquete Jimp. La imagen debe ser procesada en escala de grises y redimensionada a unos 350px de ancho.
//4. La imagen alterada debe ser almacenada con un nombre incluya una porción de un UUID y con extensión “jpg”, por ejemplo: 3dcb6d.jpeg. 


app.get("/image", async (req, res) => {

    try {
        const urlImage = req.query.urlImage;
        const image = await Jimp.read(urlImage);
        const buffer = await image
            .resize(350, Jimp.AUTO)
            .grayscale()
            .getBufferAsync(Jimp.MIME_JPEG);

        const dirnameImg = __dirname + `/public/assets/img/image-${uuidv4()}.jpeg`;
        await image.writeAsync(dirnameImg);
        res.set("Content-Type", "image/jpeg");
        return res.send(buffer);

    } catch (error) {
        const msgError = `Error en la solicitud de tipo: ${error.message}`;
        console.error(error);
        return res.status(500).send(msgError);
    }
});

app.get('*', (_, res) => {
    return res.status(404).render('404', { title: "Página no encontrada" })
})
//Levantar Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El servidor esta andando en http://localhost:${PORT}`)
})