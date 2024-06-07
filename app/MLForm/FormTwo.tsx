'use client'
import React, { useState } from 'react';
import {
    FormControl,
    Select,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Image
} from '@chakra-ui/react';
import Download from '@/components/Icons/Download';

const FormTwo = () => {
    const [formData, setFormData] = useState({
        config: 'fs',
        accelerateLaunch: 'fs',
        model: 'fs',
        metadata: 'fs',
        folders: 'fs',
        datasetPreparation: 'fs',
        presets: 'fs',
        loraType: 'fs',
        networkWeights: 'fs',
        dimFromWeight: false,
        trainBatchSize: 50,
        epoch: 0,
        maxTrainEpoch: 0,
        maxTrainStep: 400,
        saveEveryNEpochs: 'sfd',
        captionFileExtension: '.ext',
        seed: 0,
        cacheLatent: false,
        cacheLatentToDisk: false,
        lrScheduler: 'Constant with wormup',
        optimizer: 'Adafactor',
        maxGradNorm: 50,
        lrSchedulerArg: 'fs',
        optimizerArg: 'fs',
        learningRate: 'fs',
        lrWarmup: 50,
        lrCycle: 'fs',
        lrPower: 'fs',
        maxResolution: 'fs',
        stopTE: 50,
        enableBuckets: false,
        minBucketRes: 50,
        maxBucketRes: 50,
        textEncoderLR: 'fs',
        unetEncoderLR: 'sdf',
        cacheTextEncoderOutput: false,
        noHalfVAE: false
    });

    const [selectedImage, setSelectedImage] = useState(null);
    const [originalImageUrl, setOriginalImageUrl] = useState('');
    const [sepiaImageUrl, setSepiaImageUrl] = useState('');
    const orignalImg = `http://127.0.0.1:8000/${originalImageUrl}`;
    const newImage = `http://127.0.0.1:8000/${sepiaImageUrl}`;
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSubmit = new FormData();
        formDataToSubmit.append('image', selectedImage);
        Object.keys(formData).forEach(key => {
            formDataToSubmit.append(key, formData[key]);
        });

        try {
            const response = await fetch('http://127.0.0.1:8000/api/upload-image/', {
                method: 'POST',
                body: formDataToSubmit
            });

            if (response.ok) {
                const data = await response.json();
                setOriginalImageUrl(data.original_image_url);
                setSepiaImageUrl(data.sepia_image_url);
                onOpen(); // Open the modal
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section className='absolute top-24  ml-20 h-full w-auto overflow-y-scroll scrollbar-hide overflow-x-hidden'>
            <div className='w-auto h-auto relative mb-40 ml-52 flex flex-col p-4 bg-white shadow-md'>

                <form
                    onSubmit={handleSubmit}
                    className='w-auto h-auto relative mr-4 flex flex-col p-4 bg-white shadow-md'
                >
                    <span className='text-xs'>
                        Train a custom model using kohya train network LoRA python code...
                    </span>
                    <FormControl className='border my-2 overflow-hidden shadow-sm'>
                        <Select
                            placeholder='Configuration'
                            name='config'
                            value={formData.config}
                            onChange={handleChange}
                            className='w-full text-sm py-2 px-2'
                        >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </Select>
                    </FormControl>
                    <FormControl className='border my-2 overflow-hidden shadow-sm'>
                        <Select
                            placeholder='Accelerate Launch'
                            name='accelerateLaunch'
                            value={formData.accelerateLaunch}
                            onChange={handleChange}
                            className='w-full text-sm py-2 px-2'
                        >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </Select>
                    </FormControl>
                    <FormControl className='border my-2 overflow-hidden shadow-sm'>
                        <input type='file' name='image' onChange={handleImageChange} />
                        <a href="{newImage}" download>
                        <img src={newImage} alt=""
                        className='h-auto w-96 px-4 py-4 shadow-lg border my-4 mx-4 '
                        />
                        </a>
                        
                    </FormControl>
                    <Button type='submit' className='bg-blue-500 text-white py-3 border shadow-sm rounded ' colorScheme='blue'>
                        Submit
                    </Button>
                </form>
                {/* <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent className='bg-white z-auto top-20 w-96 px-10 py-8 mx-auto rounded-3xl mb-20 shadow-lg border'>
                        <ModalCloseButton />
                        <ModalBody className='flex flex-col items-center'>
                            <span className='text-sm font-semibold'>Original Image</span>
                            <Image src={orignalImg} alt='Original' className='mt-2' />
                            <span className='text-sm font-semibold mt-4'>Sepia Image</span>
                            <Image src={newImage} alt='Sepia' className='mt-2' />
                            <a href={newImage} className='mx-auto text-center mt-6 flex flex-col' download>
                                <span>Download Your File <span className='text-blue-500'>click here</span></span>
                                <span className='mx-auto mt-2 text-center text-blue-500'><Download /></span>
                            </a>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal> */}
            </div>
        </section>
    );
};

export default FormTwo;
