import { StatisticsList,StatisticsItem } from "./Statistics.styled";
import PropTypes from 'prop-types'; 

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    const statList = [
        { id: good, title: 'Good' },
        { id: neutral, title: 'Neutral' },
        { id: bad, title: 'Bad' },
        { id: total, title: 'Total feedbacks' },
        { id: positivePercentage, title: 'Positive feedbacks' },
    ]
    return (
    <StatisticsList>
    {statList.map(({id,title}) => (
        <StatisticsItem key ={title}>
            <p>{title} :
            <span>{id}</span>
            </p>
         
        </StatisticsItem>
        ))}
    </StatisticsList>

    )
};

export default Statistics;

Statistics.propTypes = {
    good:PropTypes.number.isRequired,
     neutral:PropTypes.number.isRequired,
     bad:PropTypes.number.isRequired,
     total:PropTypes.number.isRequired,
     positivePercentage:PropTypes.number.isRequired,

}