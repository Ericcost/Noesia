import { useState } from 'react';

import Cursor from '../../components/Cursor/Cursor'
import Button from '../../components/ButtonLink/ButtonLink';

import { useGetUserHistories } from '../../hooks/history/useGetUserHistories';
import { useGetUserAchievements } from '../../hooks/user_achievement/useGetUserAchievements';
import { useGetAchievements } from '../../hooks/achievement/useGetAchievements';
import { useGetUser } from '../../hooks/user/useGetUser';

import { RiSurgicalMaskLine } from 'react-icons/ri'
import { BsGear } from 'react-icons/bs'
import { GiSwordsPower, GiConcentrationOrb, GiChest } from 'react-icons/gi'
import { FaFeatherAlt, FaTrophy } from 'react-icons/fa'
import { SiAlchemy } from 'react-icons/si'
import './Profile.scss'

export default function Profile() {

  const auth_token = localStorage.getItem('Authorization_token');
  const { isLoading, data, isError, error } = useGetUser('member-data', auth_token);

  const current_user = data?.user;

  const { isLoading: isHistoriesLoading, data: historiesData, isError: isHistoriesError, error: historiesError, isSuccess: isHistoriesSuccess } = useGetUserHistories('histories', current_user?.id);
  const { data: AchievementsData } = useGetAchievements('achievements');
  const { data: UserAchievementsData } = useGetUserAchievements('join_table_user_achievements', current_user?.id);

  const numberOfAchievements = Object.values(AchievementsData).length;
  const numberOfUserAchievements = Object.values(UserAchievementsData).length;

  const progressCircles = document.querySelectorAll('.progress');

  progressCircles.forEach(circle => {
    const targetProgress = circle.getAttribute('data-target');
    const percentage = targetProgress / 100;
    const circumference = 2 * Math.PI * circle.getAttribute('r');
    const offset = circumference * (1 - percentage);
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${offset}`;
  });

  const [isExperienceHovering, setIsExperienceHovering] = useState(false);
  const [isKarmaHovering, setIsKarmaHovering] = useState(false);
  const [isAchievementHovering, setIsAchievementHovering] = useState(false);

  return (
    <>
      <Cursor />
      <div className='profile'>
        <div className='profile-wrapper'>

          <div className='profile-left'>

            <div className='profile-left-top'>
              <div className="profile-left-top-info">
                <div className="profile-left-top-info-picture">
                  <img className='profile-picture' src="../src/assets/images/background.jpg" />
                </div>
                <div className="profile-left-top-info-name">
                  <h2 className="profile-name">{current_user?.username}</h2>
                  <Button content="Editer le profil" path="/profil/editer"/>
                </div>
              </div>
              <div className='profile-left-top-player-caract'>

              <div className="container">

                <div className="gauge-container" onMouseEnter={() => setIsExperienceHovering(true)} onMouseLeave={() => setIsExperienceHovering(false)}>
                  <svg className="gauge" viewBox="0 0 150 150">
                    <circle className="rail" r="67" cx="75" cy="75" />
                    <circle className="progress" r="67" data-target="10" cx="75" cy="75" />
                  </svg>
                  {isExperienceHovering ? (
                    <span className="center percentage"><span className="value">{}%</span></span>
                  ) : (
                    <span className="center percentage"><span className="value">{current_user?.level}</span></span>
                  )}
                </div>

                </div>

                <div className="container">

                <div className="gauge-container" onMouseEnter={() => setIsKarmaHovering(true)} onMouseLeave={() => setIsKarmaHovering(false)}>
                  <svg className="gauge" viewBox="0 0 150 150">
                    <circle className="rail" r="67" cx="75" cy="75" />
                    <circle className="progress" r="67" data-target={current_user?.karma} cx="75" cy="75" />
                  </svg>
                  {isKarmaHovering ? (
                    <span className="center percentage"><span className="value">{current_user?.karma} %</span></span>
                  ) : (
                    <SiAlchemy className="center icon" />
                  )}
                </div>

                </div>

                <div className="container">

                <div className="gauge-container" onMouseEnter={() => setIsAchievementHovering(true)} onMouseLeave={() => setIsAchievementHovering(false)}>
                  <svg className="gauge" viewBox="0 0 150 150">
                    <circle className="rail" r="67" cx="75" cy="75" />
                    <circle className="progress" r="67" data-target={numberOfUserAchievements/numberOfAchievements*100} cx="75" cy="75" />
                  </svg>
                  {isAchievementHovering ? (
                    <span className="center percentage"><span className="value">{numberOfUserAchievements} / {numberOfAchievements}</span></span>
                  ) : (
                    <FaTrophy className="center icon" />
                  )}
                </div>

                </div>

              </div>
            </div>

            <div className='profile-left-bottom'>
              <h2>Caractéristiques</h2>
              <div className='profile-left-bottom-caract'>
                <p ><RiSurgicalMaskLine className='discipline' /> Discipline :</p>
                <p>{current_user?.discipline}</p>
              </div>
              <div className='profile-left-bottom-caract'>
                <p><BsGear className='ingenuity' /> Ingéniosité :</p>
                <p>{current_user?.ingenuity}</p>
              </div>
              <div className='profile-left-bottom-caract'>
                <p><GiSwordsPower className='willpower' /> Volonté :</p>
                <p>{current_user?.willpower}</p>
              </div>
              <div className='profile-left-bottom-caract'>
                <p><GiConcentrationOrb className='concentration' /> Concentration :</p>
                <p>{current_user?.concentration}</p>
              </div>
              <div className='profile-left-bottom-caract'>
                <p><GiChest className='guile' /> Ruse :</p>
                <p>{current_user?.guile}</p>
              </div>
              <div className='profile-left-bottom-caract'>
                <p><FaFeatherAlt className='dexterity' /> Dextérité :</p>
                <p>{current_user?.dexterity}</p>
              </div>
            </div>

          </div>

          <div className='profile-right'>
            <div className='profile-right-header'>
              <h2>Historique des parties</h2>
            </div>
            <div className='profile-right-cards'>
              {historiesData && historiesData?.map(history => (
                <div key={history.id} className='profile-right-card'>
                  <p>Énigme: {history.enigma_id}</p>
                  <p>Réalisé le: {history.created_at}</p>
                </div>
              ))}
              {isHistoriesLoading && <p>Loading...</p>}
              {isHistoriesError && <p>Error: {historiesError.message}</p>}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
