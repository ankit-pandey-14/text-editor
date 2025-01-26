import { memo } from 'react';
import DummyPerson from '../../../assets/dummy-person.jpg';

import CustomButton from '../../../components/customButton';
import CustomIconImage from '../../../components/customIconImage';

const WritePostSection = () => {
    return (
        <section className='write-post'>
            <div className='d-flex justify-between align-center top-section'>
                <h2>Write Post</h2>

                <div className='d-flex align-center left-part'>
                    <CustomButton
                        title={'Check Score'}
                        type='default'
                        onClick={() => {}}
                    />

                    <div className='d-flex align-center profile-box'>
                        <CustomIconImage
                            imageSrc={DummyPerson}
                            altText={'Dummy Person'}
                            classes={'profile'}
                        />
                        <div>+</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(WritePostSection);