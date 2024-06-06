'use client';
import React, { useState } from 'react';

const TrainingForm = () => {
    const [configuration, setConfiguration] = useState('');
    const [accelerateLaunch, setAccelerateLaunch] = useState('');
    const [model, setModel] = useState('');
    const [metadata, setMetadata] = useState('');
    const [folders, setFolders] = useState('');
    const [datasetPreparation, setDatasetPreparation] = useState('');
    const [presets, setPresets] = useState('');
    const [loraType, setLoRaType] = useState('');
    const [trainBatchSize, setTrainBatchSize] = useState(1);
    const [epoch, setEpoch] = useState(1);
    const [maxTrainEpoch, setMaxTrainEpoch] = useState(0);
    const [maxTrainSteps, setMaxTrainSteps] = useState(400);
    const [networkWeights, setNetworkWeights] = useState('');
    const [saveEveryNEpochs, setSaveEveryNEpochs] = useState('');
    const [dimFromWeights, setDimFromWeights] = useState(false);
    const [captionFileExtension, setCaptionFileExtension] = useState('.txt');
    const [cacheLatents, setCacheLatents] = useState(false);
    const [cacheLatentsToDisk, setCacheLatentsToDisk] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, e.g., send data to server
        console.log('Form submitted with the following data:');
        console.log('Configuration:', configuration);
        console.log('Accelerate Launch:', accelerateLaunch);
        console.log('Model:', model);
        console.log('Metadata:', metadata);
        console.log('Folders:', folders);
        console.log('Dataset Preparation:', datasetPreparation);
        console.log('Presets:', presets);
        console.log('LoRa Type:', loraType);
        console.log('Train Batch Size:', trainBatchSize);
        console.log('Epoch:', epoch);
        console.log('Max Train Epoch:', maxTrainEpoch);
        console.log('Max Train Steps:', maxTrainSteps);
        console.log('Network Weights:', networkWeights);
        console.log('Save Every N Epochs:', saveEveryNEpochs);
        console.log('Dim From Weights:', dimFromWeights);
        console.log('Caption File Extension:', captionFileExtension);
        console.log('Cache Latents:', cacheLatents);
        console.log('Cache Latents To Disk:', cacheLatentsToDisk);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Training</h2>
                <label htmlFor="configuration">Configuration:</label>
                <input
                    type="text"
                    id="configuration"
                    value={configuration}
                    onChange={(e) => setConfiguration(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="accelerateLaunch">Accelerate Launch:</label>
                <input
                    type="text"
                    id="accelerateLaunch"
                    value={accelerateLaunch}
                    onChange={(e) => setAccelerateLaunch(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="model">Model:</label>
                <input
                    type="text"
                    id="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="metadata">Metadata:</label>
                <input
                    type="text"
                    id="metadata"
                    value={metadata}
                    onChange={(e) => setMetadata(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="folders">Folders:</label>
                <input
                    type="text"
                    id="folders"
                    value={folders}
                    onChange={(e) => setFolders(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="datasetPreparation">Dataset Preparation:</label>
                <input
                    type="text"
                    id="datasetPreparation"
                    value={datasetPreparation}
                    onChange={(e) => setDatasetPreparation(e.target.value)}
                />
            </div>
            <div>
                <h2>Parameters</h2>
                <label htmlFor="presets">Presets:</label>
                <select
                    id="presets"
                    value={presets}
                    onChange={(e) => setPresets(e.target.value)}
                >
                    <option value="none">none</option>
                    {/* Add more presets options here */}
                </select>
            </div>
            <div>
                <h2>Basic</h2>
                <label htmlFor="loraType">LoRA Type:</label>
                <select
                    id="loraType"
                    value={loraType}
                    onChange={(e) => setLoRaType(e.target.value)}
                >
                    <option value="Standard">Standard</option>
                    {/* Add more LoRA types here */}
                </select>
            </div>
            <div>
                <label htmlFor="trainBatchSize">Train Batch Size:</label>
                <input
                    type="number"
                    id="trainBatchSize"
                    value={trainBatchSize}
                    onChange={(e) => setTrainBatchSize(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="epoch">Epoch:</label>
                <input
                    type="number"
                    id="epoch"
                    value={epoch}
                    onChange={(e) => setEpoch(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="maxTrainEpoch">Max Train Epoch:</label>
                <input
                    type="number"
                    id="maxTrainEpoch"
                    value={maxTrainEpoch}
                    onChange={(e) => setMaxTrainEpoch(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="maxTrainSteps">Max Train Steps:</label>
                <input
                    type="number"
                    id="maxTrainSteps"
                    value={maxTrainSteps}
                    onChange={(e) => setMaxTrainSteps(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="networkWeights">Network Weights:</label>
                <input
                    type="text"
                    id="networkWeights"
                    value={networkWeights}
                    onChange={(e) => setNetworkWeights(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="saveEveryNEpochs">Save Every N Epochs:</label>
                <input
                    type="number"
                    id="saveEveryNEpochs"
                    value={saveEveryNEpochs}
                    onChange={(e) => setSaveEveryNEpochs(parseInt(e.target.value))}
                />
            </div>
            <div>
                <input
                    type="checkbox"
                    id="dimFromWeights"
                    checked={dimFromWeights}
                    onChange={(e) => setDimFromWeights(e.target.checked)}
                />
                <label htmlFor="dimFromWeights">DIM from weights</label>
            </div>
            <div>
                <label htmlFor="captionFileExtension">Caption File Extension:</label>
                <select
                    id="captionFileExtension"
                    value={captionFileExtension}
                    onChange={(e) => setCaptionFileExtension(e.target.value)}
                >
                    <option value=".txt">.txt</option>
                    {/* Add more file extension options here */}
                </select>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="cacheLatents"
                    checked={cacheLatents}
                    onChange={(e) => setCacheLatents(e.target.checked)}
                />
                <label htmlFor="cacheLatents">Cache Latents</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="cacheLatentsToDisk"
                    checked={cacheLatentsToDisk}
                    onChange={(e) => setCacheLatentsToDisk(e.target.checked)}
                />
                <label htmlFor="cacheLatentsToDisk">Cache Latents to Disk</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TrainingForm;
