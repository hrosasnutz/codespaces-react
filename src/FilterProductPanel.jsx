function FilterProductPanel() {

    return (
        <>
            <div class="caja">
                <label for="fName">Nombre:</label>
                <input id="fName" type="text" placeholder="Nombre del producto." required></input>
                <label for="fCategory">Nombre:</label>
                <select id="fCategory" name="category" defaultValue="">
                    <option value="" disabled>Selecciona una categoría</option>
                    <option value="SMARTPHONE">Smartphone</option>
                    <option value="ACCESSORY">Accesorio</option>
                    <option value="WEARABLE">Wearable</option>
                    <option value="TABLET">Tablet</option>
                </select>

            </div>
        </>
    );
}