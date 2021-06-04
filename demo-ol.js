var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'https://{a-d}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png',
                attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                maxZoom: 19
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([149, -35]),
        zoom: 3
    }),
});

map.addControl(new ol.control.ScaleLine());

function gridStyle(feature) {
    var name = feature.get('name');
    var level = Math.max(0, name.length - 1);
    var sizes = [48, 24, 16, 12, 10];
    var size = 8;

    if (level < sizes.length) {
        size = sizes[level];
    }

    return [
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#999',
                width: 0.5
            }),
            text: new ol.style.Text({
                font: `${size}pt monospace`,
                color: '#999',
                text: name
            })
        })
    ];
}

function createQuad(name, x0, y0, x1, y1) {
    return new ol.Feature({
        name: name,
        geometry: new ol.geom.Polygon([[
            ol.proj.fromLonLat([x0, y0]),
            ol.proj.fromLonLat([x1, y0]),
            ol.proj.fromLonLat([x1, y1]),
            ol.proj.fromLonLat([x0, y1])
        ]])
    });
}

function createGridLayer(parent) {
    var source = new ol.source.Vector();
    var level = parent.length;
    var origin = getCellOrigin(parent);
    var cols = 6;
    var cells = 36;

    if (level == 0) {
        cols = 8;
        cells = 32;
    }
    for (var i = 0; i < cells; i++) {
        var step = BASE_STEP / (cols ** level);
        var x0 = origin[0] + (i % cols) * step;
        var y0 = origin[1] + Math.floor(i / cols) * step;

        var x1 = x0 + step;
        var y1 = y0 + step;

        /*
            * Artificially clamp the edges of the cells away from the poles,
            * to avoid weird placement of the text labels.
            */
        y0 = Math.max(y0, -80);
        y1 = Math.min(y1, 80);

        var name = parent + CODE[i];
        source.addFeature(createQuad(name, x0, y0, x1, y1));
    }

    return new ol.layer.Vector({
        source: source,
        style: gridStyle,
        opacity: 0.6
    });
}

map.addLayer(createGridLayer(''));
map.addLayer(createGridLayer('R'));
map.addLayer(createGridLayer('RH'));
map.addLayer(createGridLayer('RHM'));
map.addLayer(createGridLayer('RHM3'));
map.addLayer(createGridLayer('RHM3Y'));
map.addLayer(createGridLayer('RHM3YE'));
