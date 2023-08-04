import React from 'react';
import {Project} from './types';
import ImageCarousel from './ImageSlideShow/ImageCarousel';
import './CardStyles.css';



interface SubCardProps {
    project: Project;
}

const SubCard: React.FC<SubCardProps> = (props) => {
    const { project } = props;

    return (
        <div className='subCard'>
            {project.images && <ImageCarousel images={project.images} />}               
            {project.title && <h2 className='projectTitle'>{project.title}</h2>}
            {project.year && <h4 className='projectYear'>Project year: {project.year}</h4>}
            {project.description && project.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            {project.githubURL && <a href={project.githubURL} target="_blank">Open in Github</a>}
        </div>
    );
};

export default SubCard;