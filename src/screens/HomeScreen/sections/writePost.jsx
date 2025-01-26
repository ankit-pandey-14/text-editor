import { memo } from 'react';
import CustomButton from '../../../components/customButton';

const WritePostSection = () => {
    return (
        <section className='write-post'>
            <div className='d-flex'>
                <h2>Write Post</h2>

                <div>
                    <CustomButton
                        title={'Check Score'}
                        type='default'
                        onClick={() => {}}
                    />
                </div>
            </div>
        </section>
    );
};

export default memo(WritePostSection);