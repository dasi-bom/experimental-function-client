import React, { useState } from 'react';

// component
import Home from 'components/home';
import Layout from 'components/common/Layout/Layout';

// services
import { finishProtection } from 'services/diary';

// toast
import { toast } from 'react-toastify';

const HomeContainer = () => {
  // 임시보호 종료
  const [pet, setPet] = useState({ petName: 'dangdang' });
  const [isEnded, setIsEnded] = useState<boolean>(false);

  const endProtection = () => {
    finishProtection({ pet })
      .then((res) => {
        if (res.status === 200) {
          setIsEnded(true);
          toast.success(res.data.message, {
            autoClose: 2000,
          });
        } else {
          setIsEnded(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const warningMessage = () => {
    toast.error('임시보호를 종료해 주세요.', { autoClose: 2000 });
  };

  return (
    <Layout>
      <Home
        endProtection={endProtection}
        isEnded={isEnded}
        warningMessage={warningMessage}
        pet={pet}
      />
    </Layout>
  );
};

export default HomeContainer;
