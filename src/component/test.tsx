
import { useState } from "react";
import { NumberInput, Button, Group, Loader, Image, Container, Grid, Badge, Skeleton, Divider } from "@mantine/core";
import "./Demo.css";


const Demo = () => {
    const [value, setValue] = useState<number | "">("");
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState<string[]>([]);
    const [selectedImages, setSelectedImages] = useState<Set<number>>(new Set());
    const [loadingIndexes, setLoadingIndexes] = useState<Set<number>>(new Set());

    // fetch data from the API with a given count
    const fetchDogImages = async (count: number) => {
        try {
            const response = await fetch(`https://dog.ceo/api/breeds/image/random/${count}`);
            const data = await response.json();
            return data.message as string[];
        } catch (error) {
            console.error("Error fetching images:", error);
            return [];
        }
    };

    // handle loading images
    const handleLoad = async () => {
        if (!value || value < 1) return;
        setLoading(true);

        try {
            const selectedArray = Array.from(selectedImages);
            const numSelected = selectedArray.length;
            const numToFetch = value as number;

            setLoadingIndexes(new Set(selectedArray));

            const newImages = await fetchDogImages(numToFetch);
            const updatedImages = [...images];

            selectedArray.forEach((index, i) => {
                updatedImages[index] = newImages[i] || images[index];
            });

            if (numToFetch > numSelected) {
                updatedImages.push(...newImages.slice(numSelected));
            }

            setImages(updatedImages);
            setSelectedImages(new Set());
        } finally {
            setLoading(false);
            setLoadingIndexes(new Set());
        }
    };

    // handle clearing images
    const handleClear = () => {
        setValue("");
        setImages(images.filter((_, index) => selectedImages.has(index)));
        setSelectedImages(new Set());
        setLoading(false);
    };

    // handle image selection
    const toggleSelectImage = (index: number) => {
        setSelectedImages((prevSelected) => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(index)) {
                newSelected.delete(index);
            } else {
                newSelected.add(index);
            }
            return newSelected;
        });
    };

    return (
        <Container size="lg" py="xs" className="demo-container">
            <Group mt="md" align="center">
                <NumberInput
                    width={245}
                    placeholder="Enter a number"
                    value={value}
                    onChange={(val) => setValue(Number(val) ?? 1)}
                    min={1}
                    allowNegative={false}
                />
                <Button onClick={handleLoad} disabled={loading || !value} >
                    {loading ? <Loader size="xs" color="white" /> : "Load 🐶"}
                </Button>
                <Button color="red" onClick={handleClear}>Clear</Button>
                {loading && <Loader size="lg" />}
            </Group>
            <Divider my="md" />
            <Grid gutter="md" mt="lg">
                {images.map((img, index) => (
                    <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                        <div className="image-container" onClick={() => toggleSelectImage(index)}>
                            {loadingIndexes.has(index) ? (
                                <Skeleton height={200} width="100%" radius="md" />
                            ) : (
                                <Image src={img} alt={`Dog ${index + 1}`} radius="md" className="dog-image" />
                            )}
                            {selectedImages.has(index) && !loadingIndexes.has(index) && (
                                <Badge color="blue" variant="filled" className="selected-badge">
                                    Selected
                                </Badge>
                            )}
                        </div>
                    </Grid.Col>
                ))}
            </Grid>
        </Container >
    );
};

export default Demo;
