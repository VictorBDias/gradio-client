import { client } from '@gradio/client';
import { useEffect } from 'react';

export const Test = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const app = await client(
          'https://juuxn-simplervc.hf.space/--replicas/y1fkk/'
        );
        const result = await app.predict(1, [
          'Howdy!', // string in 'Texto:' Textbox component
          'Howdy!', // string in 'Url del modelo RVC' Textbox component
          'Edge-tts,Edge-tts',
          'af-ZA-AdriNeural-Female,af-ZA-AdriNeural-Female',
          'sk_8bc2df5615e82691f02461bd90c5d0d6cc2feaaa20e0ec18', // string in 'ElevenLabs Api key' Textbox component
          'en', // string in 'Language' Radio component
        ]);

        console.log(result.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Explicitly calling the async function and handling it
    fetchData().catch(error => {
      console.error('FetchData Error:', error);
    });
  }, []); // Empty dependency array means this effect runs once when the component mounts.

  return (
    <>
      <h1>Test</h1>
    </>
  );
};
