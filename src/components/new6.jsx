import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';

const initialValues = {
	weight: '',
	height: '',
	date: ''
}

const BmiForm = ({ change }) => {
	const [state, setState] = useState(initialValues);

	const handleChange = e => {
		let { value, name } = e.target;
		if (value > 999) {
			value = 999;
		}
		const date = new Date().toLocaleString().split(',')[0];
		setState({
			...state,
			[name]: value,
			date
		});
	};

	const handleSubmit = () => {
		change(state);
		setState(initialValues);
	};

	return (
		<>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="weight">Weight (in kg)</label>
					<input
						id="weight"
						name="weight"
						type="number"
						min="1"
						max="999"
						placeholder="50"
						value={state.weight}
						onChange={handleChange}
					/>
				</div>

				<div className="col m6 s12">
					<label htmlFor="height">Height (in cm)</label>
					<input
						id="height"
						name="height"
						type="number"
						min="1"
						max="999"
						placeholder="176"
						value={state.height}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="center">
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={state.weight === '' || state.height === ''}
					onClick={handleSubmit}
				>
					Calculate BMI
				</button>
			</div>
		</>
	);
};

BmiForm.propTypes = {
	change: PropTypes.func.isRequired
};

export default BmiForm;
import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const Bar = ({ labelData, bmiData }) => {
  const data = canvas => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(63, 81, 181, 700);
    gradient.addColorStop(0, '#929dd9');
    gradient.addColorStop(1, '#172b4d');

    return {
      labels: labelData,
      datasets: [
        {
          label: 'BMI',
          data: bmiData,
          backgroundColor: gradient,
          borderColor: '#3F51B5',
          pointRadius: 6,
          pointHoverRadius: 8,
          pointHoverBorderColor: 'white',
          pointHoverBorderWidth: 2
        }
      ]
    };
  };

  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Date',
            fontSize: 18,
            fontColor: 'white'
          },
          gridLines: {
            display: false,
            color: 'white'
          },
          ticks: {
            fontColor: 'white',
            fontSize: 16
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'BMI',
            fontSize: 18,
            fontColor: 'white'
          },
          gridLines: {
            display: false,
            color: 'white'
          },
          ticks: {
            fontColor: 'white',
            fontSize: 16,
            beginAtZero: true
          }
        }
      ]
    },
    tooltips: {
      titleFontSize: 13,
      bodyFontSize: 13
    }
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

Bar.propTypes = {
  labelData: PropTypes.array,
  bmiData: PropTypes.array
};

export default Bar;