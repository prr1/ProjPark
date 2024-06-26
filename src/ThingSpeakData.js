import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ThingSpeakData.css';

const ThingSpeakData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.thingspeak.com/channels/2522334/feeds/last.json?api_key=GVVWZT5GBRZ26L7M'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Parking Spots</h2>
      <br />
      {data && (
        <div className="data-container">
          <div
            className={`parking-box ${data.field1 > 40 ? 'available' : 'unavailable'}`}
          >
            <div className="parking-spot">
              <span>Parking 1</span>
              <span className={data.field1 > 40 ? 'yes' : 'no'}>
                {data.field1 > 40 ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
          <div
            className={`parking-boxa ${data.field2 > 40 ? 'available' : 'unavailable'}`}
          >
            <div className="parking-spot">
              <span>Parking 2</span>
              <span className={data.field2 > 40 ? 'yes' : 'no'}>
                {data.field2 > 40 ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
          <div
            className={`parking-box ${data.field3 > 40 ? 'available' : 'unavailable'}`}
          >
            <div className="parking-spot">
              <span>Parking 3</span>
              <span className={data.field3 > 40 ? 'yes' : 'no'}>
                {data.field3 > 40 ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
          <div
            className={`parking-boxa ${data.field4 > 40 ? 'available' : 'unavailable'}`}
          >
            <div className="parking-spot">
              <span>Parking 4</span>
              <span className={data.field4 > 40 ? 'yes' : 'no'}>
                {data.field4 > 40 ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThingSpeakData;