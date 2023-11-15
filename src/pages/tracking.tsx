import { Layout } from '../components/Layout/Layout';
import { useEffect, useState } from 'react';
import getData from '../firebase/firestore/getData';
import getDatas from '../firebase/firestore/getDatas';


export default function TrackingDashboard() {

  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    const response: any = await getDatas("logs");
    if (!!response.error) {
      console.log(response.error);
      return;
    }
    setLogs(response.result);

    console.log(logs)
  }

  useEffect(() => {
    fetchLogs();
  }, [])

  return (
  <Layout className="bg-gray-50" withoutContactBanner>
    <h1>This is tracking page</h1>
    <ul>
      {logs.map((item: Record<string, any>) => 
        <li>{item.id} | {item.eventType} | "{item.resourceID}"</li>
      )}
    </ul>
  </Layout>
  )
}