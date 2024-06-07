'use client'
import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Select,
    Input,
    Checkbox,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter
} from '@chakra-ui/react';
import { Hidden } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Download from '@/components/Icons/Download';
const FormOne = () => {
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

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSliderChange = (name) => (event, newValue) => {
        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/submit-form/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form submitted successfully');
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
            <div className='w-auto h-auto relative mb-40 ml-52 flex flex-col p-4 bg-white shadow-md' >


            <form
                onSubmit={handleSubmit}
                    className='w-auto h-auto relative mr-4 flex flex-col p-4 bg-white shadow-md'
            >
                <span className='text-xs'>
                    Train a custom model using kohya train network LoRA python code...
                </span>
                <FormControl className='border my-2 overflow-hidden shadow-sm'>
                    <Select
                        placeholder='Configration'
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
                    <Select
                        placeholder='Model'
                        name='model'
                        value={formData.model}
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
                        placeholder='Metadata'
                        name='metadata'
                        value={formData.metadata}
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
                        placeholder='Folders'
                        name='folders'
                        value={formData.folders}
                        onChange={handleChange}
                        className='w-full overflow-hidden text-sm py-2 px-2'
                    >
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </Select>
                </FormControl>
                <FormControl className='border my-2 overflow-hidden shadow-sm'>
                    <Select
                        placeholder='Dataset Preparation'
                        name='datasetPreparation'
                        value={formData.datasetPreparation}
                        onChange={handleChange}
                        className='w-full overflow-hidden text-sm py-2 px-2'
                    >
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </Select>
                </FormControl>
                <FormControl className='border my-2 py-2 px-2 overflow-hidden shadow-sm'>
                    <span className='text-sm'>Parameters</span>
                    <FormControl className='border overflow-hidden shadow-sm my-2 py-2 px-2'>
                        <span className='text-sm'>Presets</span>
                        <FormControl className='border my-2 overflow-hidden shadow-sm'>
                            <Select
                                placeholder='none'
                                name='presets'
                                value={formData.presets}
                                onChange={handleChange}
                                className='w-full overflow-hidden text-sm py-2 px-2'
                            >
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                            </Select>
                        </FormControl>
                    </FormControl>
                </FormControl>
                <FormControl className='border my-2 py-2 px-2 overflow-hidden shadow-sm'>
                    <span className='text-sm'>Basic</span>
                    <div className=''>
                        <FormControl className='h-36 w-3/5 border overflow-hidden float-left shadow-sm my-2 py-2 px-2'>
                            <span className='text-sm'>LoRA Type</span>
                            <FormControl className='border my-2 overflow-hidden shadow-sm'>
                                <Select
                                    placeholder='Standard'
                                    name='loraType'
                                    value={formData.loraType}
                                    onChange={handleChange}
                                    className='w-full overflow-hidden text-sm py-2 px-2'
                                >
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                </Select>
                            </FormControl>
                        </FormControl>
                        <FormControl className='h-36 w-1/5 border overflow-hidden float-left shadow-sm my-2 py-2 px-2'>
                            <span className='text-xs'>Network Weights</span><br />
                            <span className='text-xs font-extralight line-clamp-6'>Path to an existing LoRA Network weight to resume training from</span>
                            <FormControl className='border my-2 overflow-hidden shadow-sm'>
                                <Input
                                    placeholder='Optional'
                                    name='networkWeights'
                                    value={formData.networkWeights}
                                    onChange={handleChange}
                                    className='w-full overflow-hidden text-sm py-2 px-2'
                                />
                            </FormControl>
                        </FormControl>
                        <FormControl className='h-36 w-1/5 border overflow-hidden float-left shadow-sm my-2 py-2 px-2'>
                            <span className='text-xs font-extralight line-clamp-6'>Automatically determine the dim(rank) from the weight file</span>
                            <FormControl className='border my-2 overflow-hidden shadow-sm'>
                                <Checkbox
                                    name='dimFromWeight'
                                    checked={formData.dimFromWeight}
                                    onChange={handleChange}
                                    className='text-xs'
                                >
                                    Yes
                                </Checkbox>
                            </FormControl>
                        </FormControl>
                    </div>
                    <div className=''>
                        <FormControl className='h-36 w-3/5 border overflow-hidden float-left shadow-sm my-2 py-2 px-2'>
                            <span className='text-sm'>Train Batch Size</span>
                            <Box>
                                <Slider
                                    value={formData.trainBatchSize}
                                    onChange={handleSliderChange('trainBatchSize')}
                                    aria-labelledby='trainBatchSize'
                                    step={10}
                                    marks
                                    min={10}
                                    max={100}
                                />
                            </Box>
                        </FormControl>
                        <FormControl className='h-36 w-1/5 border overflow-hidden float-left shadow-sm my-2 py-2 px-2'>
                            <span className='text-xs'>Epoch</span><br />
                            <span className='text-xs font-extralight line-clamp-6'>Max number of epochs</span>
                            <FormControl className='border my-2 overflow-hidden shadow-sm'>
                                <Input
                                    placeholder='Optional'
                                    name='epoch'
                                    value={formData.epoch}
                                    onChange={handleChange}
                                    className='w-full overflow-hidden text-sm py-2 px-2'
                                />
                            </FormControl>
                        </FormControl>
                        <FormControl className='h-36 w-1/5 border overflow-hidden float-left shadow-sm my-2 py-2 px-2'>
                            <span className='text-xs'>Max Train Epoch</span><br />
                            <span className='text-xs font-extralight line-clamp-6'>Max number of train epochs</span>
                            <FormControl className='border my-2 overflow-hidden shadow-sm'>
                                <Input
                                    placeholder='Optional'
                                    name='maxTrainEpoch'
                                    value={formData.maxTrainEpoch}
                                    onChange={handleChange}
                                    className='w-full overflow-hidden text-sm py-2 px-2'
                                />
                            </FormControl>
                        </FormControl>
                    </div>
                </FormControl>
                <FormControl className='border my-2 py-2 px-2 overflow-hidden shadow-sm'>
                    <span className='text-sm'>Advanced</span>
                    <div className=''>
                        <FormControl className='h-36 w-2/5 border overflow-hidden float-left shadow-sm my-2 py-2 px-2'>
                            <span className='text-sm'>Learning Rate</span>
                            <FormControl className='border my-2 overflow-hidden shadow-sm'>
                                <Input
                                    placeholder='Optional'
                                    name='learningRate'
                                    value={formData.learningRate}
                                    onChange={handleChange}
                                    className='w-full overflow-hidden text-sm py-2 px-2'
                                />
                            </FormControl>
                        </FormControl>
                        
                    </div>
                </FormControl>
                <Button type='submit' className='bg-blue-500 text-white py-3 border shadow-sm rounded ' colorScheme='blue'> 
                    Submit
                </Button>
            </form>
            <Modal isOpen={isOpen} onClose={onClose}  >

                <ModalOverlay />
                <ModalContent className='bg-white relative z-auto top-20 w-96 px-10 py-8 mx-auto rounded-3xl mb-20 shadow-lg border ' >
                    {/* <ModalHeader>Form Submission Successful</ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody className='flex' >
                        {/* <p>Your form has been submitted successfully. You can download the JSON file below:</p> */}
                        <a href='http://127.0.0.1:8000/form_data.json' className='mx-auto text-center mt-6 flex flex-col '  download >
                            <span> Download Your File <span className=' text-blue-500 ' >click here</span></span>
                            <span className='mx-auto mt-2 text-center text-blue-500 '><Download/></span>
                        </a>
                    </ModalBody>
                    <ModalFooter className=' relative flex '  >
                        <Button className=' -mt-16 -ml-20 '  colorScheme='blue' mr={3} onClick={onClose}>
                            {/* Close */}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            </div>
        </section>
    );
};

export default FormOne;
