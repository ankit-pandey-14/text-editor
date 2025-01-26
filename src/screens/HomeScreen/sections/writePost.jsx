import { memo } from 'react';
import DummyPerson from '../../../assets/dummy-person.jpg';

import CustomButton from '../../../components/customButton';
import CustomIconImage from '../../../components/customIconImage';

const WritePostSection = () => {
    return (
        <section className='write-post'>
            <div className='d-flex justify-between align-center top-section'>
                <h3>Write Post</h3>

                <div className='d-flex align-center right-part'>
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

            <div className='d-flex justify-between align-center toolbar'>
                <div className='d-flex'>
                    
                </div>
                <div className='d-flex'></div>
            </div>
        </section>
    );
};

export default memo(WritePostSection);