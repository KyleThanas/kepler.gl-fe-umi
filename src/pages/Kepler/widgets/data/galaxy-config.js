export default {
  version: 'v1',
  config: {
    version: 'v1',
    config: {
      visState: {
        filters: [
          {
            dataId: ['nyctrips'],
            id: 'me',
            name: ['tpep_pickup_datetime'],
            type: 'timeRange',
            enlarged: true,
          },
        ],
        layers: [
          {
            id: 'f29m0q',
            type: 'arc',
            config: {
              dataId: 'nyctrips',
              label: 'pickup -> dropoff arc',
              color: [16, 129, 136],
              columns: {
                lat0: 'pickup_latitude',
                lng0: 'pickup_longitude',
                lat1: 'dropoff_latitude',
                lng1: 'dropoff_longitude',
              },
              isVisible: false,
              visConfig: {
                opacity: 0.37,
                thickness: 1,
                colorRange: {
                  category: 'Uber',
                  colors: ['#5A1846', '#900C3F', '#C70039', '#E3611C', '#F1920E', '#FFC300'],
                  name: 'Global Warming',
                  type: 'sequential',
                },
                sizeRange: [0, 10],
                targetColor: [59, 30, 177],
              },
              hidden: false,
              textLabel: [
                {
                  field: null,
                  color: [255, 255, 255],
                  size: 18,
                  offset: [0, 0],
                  anchor: 'start',
                  alignment: 'center',
                },
              ],
            },
            visualChannels: {
              colorField: null,
              colorScale: 'quantile',
              sizeField: null,
              sizeScale: 'linear',
            },
          },
          {
            id: '4bonnee',
            type: 'point',
            config: {
              dataId: 'nyctrips',
              label: 'pickup',
              color: [36, 115, 189],
              columns: {
                lat: 'pickup_latitude',
                lng: 'pickup_longitude',
                altitude: null,
              },
              isVisible: true,
              visConfig: {
                radius: 1,
                fixedRadius: false,
                opacity: 0.8,
                outline: false,
                thickness: 2,
                strokeColor: [36, 115, 189],
                colorRange: {
                  category: 'Uber',
                  colors: ['#5A1846', '#900C3F', '#C70039', '#E3611C', '#F1920E', '#FFC300'],
                  name: 'Global Warming',
                  type: 'sequential',
                },
                strokeColorRange: {
                  category: 'Uber',
                  colors: ['#5A1846', '#900C3F', '#C70039', '#E3611C', '#F1920E', '#FFC300'],
                  name: 'Global Warming',
                  type: 'sequential',
                },
                radiusRange: [0, 50],
                filled: true,
              },
              hidden: false,
              textLabel: [
                {
                  field: null,
                  color: [255, 255, 255],
                  size: 18,
                  offset: [0, 0],
                  anchor: 'start',
                  alignment: 'center',
                },
              ],
            },
            visualChannels: {
              colorField: null,
              colorScale: 'quantile',
              strokeColorField: null,
              strokeColorScale: 'quantile',
              sizeField: null,
              sizeScale: 'linear',
            },
          },
          {
            id: 'pnidnry',
            type: 'point',
            config: {
              dataId: 'nyctrips',
              label: 'dropoff',
              color: [34, 63, 154],
              columns: {
                lat: 'dropoff_latitude',
                lng: 'dropoff_longitude',
                altitude: null,
              },
              isVisible: true,
              visConfig: {
                radius: 8,
                fixedRadius: false,
                opacity: 0.8,
                outline: false,
                thickness: 2,
                strokeColor: [34, 63, 154],
                colorRange: {
                  category: 'Uber',
                  colors: ['#5A1846', '#900C3F', '#C70039', '#E3611C', '#F1920E', '#FFC300'],
                  name: 'Global Warming',
                  type: 'sequential',
                },
                strokeColorRange: {
                  category: 'Uber',
                  colors: ['#5A1846', '#900C3F', '#C70039', '#E3611C', '#F1920E', '#FFC300'],
                  name: 'Global Warming',
                  type: 'sequential',
                },
                radiusRange: [0, 50],
                filled: true,
              },
              hidden: false,
              textLabel: [
                {
                  field: null,
                  color: [255, 255, 255],
                  size: 18,
                  offset: [0, 0],
                  anchor: 'start',
                  alignment: 'center',
                },
              ],
            },
            visualChannels: {
              colorField: null,
              colorScale: 'quantile',
              strokeColorField: null,
              strokeColorScale: 'quantile',
              sizeField: null,
              sizeScale: 'linear',
            },
          },
        ],
        interactionConfig: {
          tooltip: {
            fieldsToShow: {
              nyctrips: [
                {
                  name: 'VendorID',
                  format: null,
                },
                {
                  name: 'tpep_pickup_datetime',
                  format: null,
                },
                {
                  name: 'tpep_dropoff_datetime',
                  format: null,
                },
                {
                  name: 'passenger_count',
                  format: null,
                },
                {
                  name: 'trip_distance',
                  format: null,
                },
              ],
            },
            compareMode: false,
            compareType: 'absolute',
            enabled: false,
          },
          brush: {
            size: 0.5,
            enabled: false,
          },
          geocoder: {
            enabled: false,
          },
          coordinate: {
            enabled: false,
          },
        },
        layerBlending: 'additive',
        splitMaps: [],
        animationConfig: {
          currentTime: null,
          speed: 1,
        },
      },
      mapState: {
        bearing: -15.25,
        dragRotate: true,
        latitude: 40.73994090986304,
        longitude: -73.98169233793443,
        pitch: 56.012527487172655,
        zoom: 14.228825251870287,
        isSplit: false,
      },
      mapStyle: {
        styleType: 'dark',
        topLayerGroups: {},
        visibleLayerGroups: {
          border: false,
          building: true,
          label: false,
          land: true,
          road: true,
          water: true,
        },
        threeDBuildingColor: [9.665468314072013, 17.18305478057247, 31.1442867897876],
        mapStyles: {},
      },
    },
  },
};
