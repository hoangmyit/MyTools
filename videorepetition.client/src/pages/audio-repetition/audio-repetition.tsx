import { FunctionComponent, useEffect, useState } from 'react';
import { AudioRepetitionProp, Forecast } from './audio-repetition-def';
import PageHeader from '../../layout/common/page-header/page-header';

const AudioRepetition: FunctionComponent<AudioRepetitionProp> = ({ title }) => {
  const [forecasts, setForecasts] = useState<Forecast[]>();

  useEffect(() => {
    populateWeatherData();
  }, []);

  async function populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    setForecasts(data);
  }

  const contents =
    forecasts === undefined ? (
      <p>
        <em>
          Loading... Please refresh once the ASP.NET backend has started. See{' '}
          <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.
        </em>
      </p>
    ) : (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

  return (
    <div>
      <PageHeader title={title} active="Audio" heading="Repetition" />
      <div className="row">
        <div className="col-12 col-sm-12">
          <div className="card">
            <div className="body">
              <h1 id="tabelLabel">Weather forecast</h1>
              <p>This component demonstrates fetching data from the server.</p>
              {contents}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioRepetition;
