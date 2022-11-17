import { useRouter } from 'next/router';

import Build from '../components/Build';
import Modal from '../components/Modal';

export default function Admin(): JSX.Element {
  const router = useRouter();

  const dataSet = [
    {
      cityId: '30830',
      dataset: 'Hybrid Sydney',
      reference: 'hybrid_sydney',
    },
    {
      cityId: '42',
      dataset: 'Hybrid Melbourne',
      reference: 'hybrid_melbourne',
    },
    {
      cityId: '40',
      dataset: 'Hybrid Brisbane',
      reference: 'hybrid_brisbane',
    },
    {
      cityId: '43',
      dataset: 'Hybrid Perth',
      reference: 'hybrid_perth',
    },
    {
      cityId: '84670',
      dataset: 'Hybrid Adelaide',
      reference: 'hybrid_adelaide',
    },
    {
      cityId: '84871',
      dataset: 'Hybrid Gold Coast',
      reference: 'hybrid_gold_coast',
    },
    {
      cityId: '84931',
      dataset: 'Hybrid Canberra',
      reference: 'hybrid_canberra',
    },
    {
      cityId: '84655',
      dataset: 'Hybrid Newcastle',
      reference: 'hybrid_newcastle',
    },
    {
      cityId: '84613',
      dataset: 'Hybrid Wollongong',
      reference: 'hybrid_wollongong',
    },
    {
      cityId: '89683',
      dataset: 'Hybrid Geelong',
      reference: 'hybrid_geelong',
    },
    {
      cityId: '84176',
      dataset: 'Hybrid Hobart',
      reference: 'hybrid_hobart',
    },
    {
      cityId: '102206',
      dataset: 'Hybrid Townsville',
      reference: 'hybrid_townsville',
    },
    {
      cityId: '41',
      dataset: 'Hybrid Cairns',
      reference: 'hybrid_cairns',
    },
    {
      cityId: '85027',
      dataset: 'Hybrid Toowoomba',
      reference: 'hybrid_toowoomba',
    },
    {
      cityId: '84590',
      dataset: 'Hybrid Darwin',
      reference: 'hybrid_darwin',
    },
    {
      cityId: '84612',
      dataset: 'Hybrid Ballarat',
      reference: 'hybrid_ballarat',
    },
    {
      cityId: '102144',
      dataset: 'Hybrid Alice Springs',
      reference: 'hybrid_alice_springs',
    },
    {
      cityId: '84614',
      dataset: 'Hybrid Bendigo',
      reference: 'hybrid_bendigo',
    },
    {
      cityId: '84641',
      dataset: 'Hybrid Mildura',
      reference: 'hybrid_mildura',
    },
    {
      cityId: '84986',
      dataset: 'Hybrid Busselton',
      reference: 'hybrid_busselton',
    },
  ];

  // if router contains ?auth=06102000, then return, else redirect '/'
  if (router.query.auth === '06102000') {
    return (
      <div>
        <section id='Admin'>
          <div className='summary'>
            <h1>Admin</h1>
            <input type='text' />
          </div>
        </section>
        <section
          style={{
            maxWidth: '100%',
            overflowY: 'auto',
            paddingLeft: '0',
            paddingRight: '0',
            position: 'relative',
          }}>
          <table>
            <thead>
              <tr>
                <th>Dataset</th>
                <th>Reference</th>
                <th>City ID</th>
                <th>Cost</th>
                <th>Build</th>
              </tr>
            </thead>
            <tbody>
              {dataSet.map((data) => (
                <tr key={data.cityId}>
                  <td>{data.dataset}</td>
                  <td>
                    <code>{data.reference}</code>
                  </td>
                  <td>
                    <code>{data.cityId}</code>
                  </td>
                  <td>$1.00</td>
                  <td>
                    <Modal
                      title={`Build ${data.reference}`}
                      trigger={<button>Build</button>}>
                      <Build city={data.cityId} reference={data.reference} />
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  } else {
    return (
      <section>
        <h3>There was an error.</h3>
      </section>
    );
  }
}