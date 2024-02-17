import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';



export function Timeline() {
    return (
        <VerticalTimeline layout="1-column">
            <VerticalTimelineElement
                className="vertical-timeline-element--education glassmorphism-effect"
                date="2020 - 2024"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">University of California, Davis</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor of Science</h4>
                <p>
                    Computer Science and Engineering
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work glassmorphism-effect"
                date="2022 - Present"
                iconStyle={{ background: '#6d60e0', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Student Researcher</h3>
                <h4 className="vertical-timeline-element-subtitle">Joseph Lab at UC Davis</h4>
                <p>
                    Davis, CA
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work glassmorphism-effect"
                date="Summer 2023"
                iconStyle={{ background: '#6d60e0', color: '#fff'}}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Hewlett-Packard Inc.</h4>
                <p>
                    San Diego, CA
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work glassmorphism-effect"
                date="Summer 2022"
                iconStyle={{ background: '#6d60e0', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Relativity</h4>
                <p>
                    Chicago, Illinois
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<StarIcon />}
            />
        </VerticalTimeline>
    )
}

export default Timeline;