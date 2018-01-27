import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        questions: [
            {
                "no": 1,
                "attributes": [
                    {
                        "text": "Animated",
                        "description": "Full of life, lively use of hand, arm, and face gestures.",
                        "value": "S"
                    },
                    {
                        "text": "Adventurous",
                        "description": "One who will take on new and daring enterprises with a need to master them.",
                        "value": "C"
                    },
                    {
                        "text": "Analytical",
                        "description": "One who is constantly in the process of analyzing people, places or things.",
                        "value": "M"
                    },
                    {
                        "text": "Adaptable",
                        "description": "One who easily adapts to any situation.",
                        "value": "P"
                    }
                ]
            },
            {
                "no": 2,
                "attributes": [
                    {
                        "text": "Persistent",
                        "description": "Refusing to let go, insistently repetitive or continuous, can't drop it.",
                        "value": "M"
                    },
                    {
                        "text": "Playful",
                        "description": "Full of fun and good humor.",
                        "value": "S"
                    },
                    {
                        "text": "Persuasive",
                        "description": "One who persuades through logic and fact rather than charm.",
                        "value": "C"
                    },
                    {
                        "text": "Peaceful",
                        "description": "One who seems undisturbed and tranquil and who retreats from any form of strife.",
                        "value": "P"
                    }
                ]
            },
            {
                "no": 3,
                "attributes": [
                    {
                        "text": "Submissive",
                        "description": "One who easily submits to any other’s point of view or desire. This person has little need to assert his own view or opinion.",
                        "value": "P"
                    },
                    {
                        "text": "Self-sacrificing",
                        "description": "One who constantly sacrifices his/her own personal well being or for the sake or to meet the needs of others.",
                        "value": "M"
                    },
                    {
                        "text": "Sociable",
                        "description": "This sociable refers to one who sees being with others as an opportunity to be cute and entertaining.  If you are one who enjoys social gatherings as a challenge or business opportunity then do not check this word.",
                        "value": "S"
                    },
                    {
                        "text": "Strong-willed",
                        "description": "One who is determined to have his/her own way.",
                        "value": "C"
                    }
                ]
            },
            {
                "no": 4,
                "attributes": [
                    {
                        "text": "Considerate",
                        "description": "Having regard for the needs and feelings of others.",
                        "value": "M"
                    },
                    {
                        "text": "Controlled",
                        "description": "One who has emotional feelings but doesn't display them.",
                        "value": "P"
                    },
                    {
                        "text": "Competitive",
                        "description": "One who turns every situation, happening or game into to an arena for competition.  This person always plays to win.",
                        "value": "C"
                    },
                    {
                        "text": "Convincing",
                        "description": "This person can convince you of anything through the sheer charm of his/her personality.  Facts are unimportant.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 5,
                "attributes": [
                    {
                        "text": "Refreshing",
                        "description": "One who renews and stimulates or pleasantly lifts spirits.",
                        "value": "S"
                    },
                    {
                        "text": "Respectful",
                        "description": "One who treats others with deference, honor, esteem.",
                        "value": "M"
                    },
                    {
                        "text": "Reserved",
                        "description": "Self-restraint in expression of emotion or enthusiasm.",
                        "value": "P"
                    },
                    {
                        "text": "Resourceful",
                        "description": "One who is able to act quickly and effectively in virtually all situations.",
                        "value": "C"
                    }
                ]
            },
            {
                "no": 6,
                "attributes": [
                    {
                        "text": "Satisfied",
                        "description": "A person who easily accepts any circumstance or situation.",
                        "value": "P"
                    },
                    {
                        "text": "Sensitive",
                        "description": "This person is intensively sensitive to self and others.",
                        "value": "M"
                    },
                    {
                        "text": "Self-reliant",
                        "description": "An independent person who can fully rely on his own capabilities, judgment, and resources.",
                        "value": "C"
                    },
                    {
                        "text": "Spirited",
                        "description": "One who is full of life and excitement.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 7,
                "attributes": [
                    {
                        "text": "Planner",
                        "description": "One who prefers to work out a detailed arrangement beforehand, for the accomplishment of a project or goal.  This  person much prefers involvement with the planning stages and the finished product rather than the carrying out of the task.",
                        "value": "M"
                    },
                    {
                        "text": "Patient",
                        "description": "One who is unmoved by delay - calm and tolerant.",
                        "value": "P"
                    },
                    {
                        "text": "Positive",
                        "description": "Characterized by certainty and assurance.",
                        "value": "C"
                    },
                    {
                        "text": "Promoter",
                        "description": "One who can compel others to go along, join, or invest through the sheer charm of his/her own.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 8,
                "attributes": [
                    {
                        "text": "Sure",
                        "description": "One who is confident, not hesitating or wavering.",
                        "value": "C"
                    },
                    {
                        "text": "Spontaneous",
                        "description": "One who prefers all of life to be impulsive, unpremeditated activity.  This  person feels restricted by plans.",
                        "value": "S"
                    },
                    {
                        "text": "Scheduled",
                        "description": "This person is controlled by his/her schedule and gets very upset if that schedule is interrupted.  There is another type of person who uses a schedule to stay organized, but is not controlled by the schedule.  If the second description is you, do not check this word.",
                        "value": "M"
                    },
                    {
                        "text": "Shy",
                        "description": "Quiet, doesn't easily instigate a conversation.",
                        "value": "P"
                    }
                ]
            },
            {
                "no": 9,
                "attributes": [
                    {
                        "text": "Orderly",
                        "description": "A person who has a methodical, systematic arrangement of things. Can be obsessively tidy.",
                        "value": "M"
                    },
                    {
                        "text": "Obliging",
                        "description": "Accommodating. One who is quick to do it another's way.",
                        "value": "P"
                    },
                    {
                        "text": "Outspoken",
                        "description": "One who speaks frankly and without reserve.",
                        "value": "C"
                    },
                    {
                        "text": "Optimistic",
                        "description": "This optimist is an almost childlike, dreamer type of optimist.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 10,
                "attributes": [
                    {
                        "text": "Friendly",
                        "description": "This person is a responder to friendliness rather than an initiator.  While he/she seldom starts a conversation he/she responds with great warmth and enjoys the exchange.",
                        "value": "P"
                    },
                    {
                        "text": "Faithful",
                        "description": "Consistently reliable.  Steadfast, loyal, and devoted sometimes beyond reason.",
                        "value": "M"
                    },
                    {
                        "text": "Funny",
                        "description": "This person has an innate humor that can make virtually any story a funny one and is a remarkable joke teller.  If you have a dry humor, do not check this word.",
                        "value": "S"
                    },
                    {
                        "text": "Forceful",
                        "description": "A commanding personality.  One would hesitate to take a stand against this person.",
                        "value": "C"
                    }
                ]
            },
            {
                "no": 11,
                "attributes": [
                    {
                        "text": "Daring",
                        "description": "One who is willing to take risks; fearless, bold.",
                        "value": "C"
                    },
                    {
                        "text": "Delightful",
                        "description": "A person who is greatly pleasing, fun to be with.",
                        "value": "S"
                    },
                    {
                        "text": "Diplomatic",
                        "description": "One who deals with people both tactfully and sensitively.",
                        "value": "P"
                    },
                    {
                        "text": "Detailed",
                        "description": "A person who prefers working with the minute or fields that require detail work such as math, research, accounting, carving, art, graphics, etc.",
                        "value": "M"
                    }
                ]
            },
            {
                "no": 12,
                "attributes": [
                    {
                        "text": "Cheerful",
                        "description": "Constantly being in good spirits and promoting cheer.",
                        "value": "S"
                    },
                    {
                        "text": "Consistent",
                        "description": "A person who is agreeable, compatible, not contradictory.",
                        "value": "P"
                    },
                    {
                        "text": "Cultured",
                        "description": "One whose interests involve both intellectual and artistic pursuits, such as theater, symphony, ballet, etc.",
                        "value": "M"
                    },
                    {
                        "text": "Confident",
                        "description": "One who is self-assured and/or certain of success.",
                        "value": "C"
                    }
                ]
            },
            {
                "no": 13,
                "attributes": [
                    {
                        "text": "Idealistic",
                        "description": "One who visualizes in an ideal or perfect form, and has a need to measure up that standard.",
                        "value": "M"
                    },
                    {
                        "text": "Independent",
                        "description": "One who is self-sufficient, self-supporting, self-confident, and seems to have little need of help.",
                        "value": "C"
                    },
                    {
                        "text": "Inoffensive",
                        "description": "A person who never causes offense, pleasant, unobjectionable, harmless.",
                        "value": "P"
                    },
                    {
                        "text": "Inspiring",
                        "description": "One who encourages others to work, join, or be involved.  There is another personality that is deeply inspirational and has a need to bring life-changing inspiration.  If you are the latter, do not check this word.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 14,
                "attributes": [
                    {
                        "text": "Demonstrative",
                        "description": "One who openly expresses emotion, especially affection.  This person doesn't hesitate to touch others while speaking to them.",
                        "value": "S"
                    },
                    {
                        "text": "Decisive",
                        "description": "A person with quick decision-making ability.",
                        "value": "C"
                    },
                    {
                        "text": "Dry Humor",
                        "description": "One who exhibits dry wit, usually one-liners which can be sarcastic in nature, but very humorous.",
                        "value": "P"
                    },
                    {
                        "text": "Deep",
                        "description": "A person who is intense and often introspective with a distaste for surface conversation and pursuits.",
                        "value": "M"
                    }
                ]
            },
            {
                "no": 15,
                "attributes": [
                    {
                        "text": "Mediator",
                        "description": "A person who consistently finds him/herself in the role of reconciling differences in order to avoid conflict.",
                        "value": "P"
                    },
                    {
                        "text": "Musical",
                        "description": "One who either participates in or has an intense appreciation for music.   This type of musical would not include those who find it fun to sing or play.  The latter would be a different personality that enjoys being entertainer rather than one who is deeply committed to music as an art form.",
                        "value": "M"
                    },
                    {
                        "text": "Mover",
                        "description": "One who is so driven by a need to be productive, that he/she finds it difficult to sit still.",
                        "value": "C"
                    },
                    {
                        "text": "Mixes easily",
                        "description": "One who loves a party and can't wait to meet everyone in the room, never meets a stranger.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 16,
                "attributes": [
                    {
                        "text": "Thoughtful",
                        "description": "A considerate person who remembers special occasions and is quick to make a kind gesture.",
                        "value": "M"
                    },
                    {
                        "text": "Tenacious",
                        "description": "One who holds on firmly, stubbornly, and won't let go till the goals are accomplished.",
                        "value": "C"
                    },
                    {
                        "text": "Talker",
                        "description": "A person who is constantly talking, generally telling funny stories and entertaining everyone around him/her.  There is another compulsive talker who is a nervous talker and feels the need to fill the silence in order to make others comfortable.",
                        "value": "S"
                    },
                    {
                        "text": "Tolerant",
                        "description": "One who easily accepts the thoughts and ways of others without the need to disagree with or change them.",
                        "value": "P"
                    }
                ]
            },
            {
                "no": 17,
                "attributes": [
                    {
                        "text": "Listener",
                        "description": "One who always seems willing to listen.",
                        "value": "P"
                    },
                    {
                        "text": "Loyal",
                        "description": "Faithful to a person, ideal, or job.  This person is sometimes is loyal beyond reason and to his/her own detriment.",
                        "value": "M"
                    },
                    {
                        "text": "Leader",
                        "description": "A person who is a born leader.  This is not one who rises to the occasion because they can lead, but one who is driven to lead and finds it very difficult to believe anyone else can do the job.",
                        "value": "C"
                    },
                    {
                        "text": "Lively",
                        "description": "Full of life, vigorous, energetic.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 18,
                "attributes": [
                    {
                        "text": "Contented",
                        "description": "One who is easily satisfied with what he/she has.",
                        "value": "P"
                    },
                    {
                        "text": "Chief",
                        "description": "A person who commands leadership.",
                        "value": "C"
                    },
                    {
                        "text": "Chartmaker",
                        "description": "One who enjoys charts, graphs, or lists.",
                        "value": "M"
                    },
                    {
                        "text": "Cute",
                        "description": "Bubbly-Beauty, cutie, precious, diminutive.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 19,
                "attributes": [
                    {
                        "text": "Perfectionist",
                        "description": "One who desires perfection, but not necessarily in every area of life.",
                        "value": "M"
                    },
                    {
                        "text": "Permissive",
                        "description": "This person is permissive with employees, friends, and children in order to avoid conflict.",
                        "value": "P"
                    },
                    {
                        "text": "Productive",
                        "description": "One who must constantly be working and/or producing.  This person finds it very difficult to rest.",
                        "value": "C"
                    },
                    {
                        "text": "Popular",
                        "description": "One who is the life of the party and therefore is much desired as a party guest.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 20,
                "attributes": [
                    {
                        "text": "Bouncy",
                        "description": "A bubbly, lively personality.",
                        "value": "S"
                    },
                    {
                        "text": "Bold",
                        "description": "Fearless, daring, forward.",
                        "value": "C"
                    },
                    {
                        "text": "Behaved",
                        "description": "One who consistently desires to conduct him/herself within the realm of what is proper.",
                        "value": "M"
                    },
                    {
                        "text": "Balanced",
                        "description": "Stable, middle of the road personality, without extremes.",
                        "value": "P"
                    }
                ]
            },
            {
                "no": 21,
                "attributes": [
                    {
                        "text": "Brassy",
                        "description": "One who is showy, flashy, comes on strong.",
                        "value": "S"
                    },
                    {
                        "text": "Bossy",
                        "description": "Commanding, domineering, overbearing.  (Do not relate this to the raising of children.  All mothers seem bossy and domineering.) Think only of adult relationships.",
                        "value": "C"
                    },
                    {
                        "text": "Bashful",
                        "description": "One who shrinks from notice, resulting from self-consciousness. ",
                        "value": "M"
                    },
                    {
                        "text": "Blank",
                        "description": "A person who shows little facial expression or emotion.",
                        "value": "P"
                    }
                ]
            },
            {
                "no": 22,
                "attributes": [
                    {
                        "text": "Undisciplined",
                        "description": "A person whose lack of discipline permeates virtually every area of his/her life.",
                        "value": "S"
                    },
                    {
                        "text": "Unsympathetic",
                        "description": "One who finds it difficult to relate to the problems or hurts of others.",
                        "value": "C"
                    },
                    {
                        "text": "Unenthusiastic",
                        "description": "A person who finds it hard to get excited or feel enthusiastic.",
                        "value": "P"
                    },
                    {
                        "text": "Unforgiving",
                        "description": "One who has difficulty forgiving a hurt or injustice done to them. This individual may find it hard to  release a grudge.",
                        "value": "M"
                    }
                ]
            },
            {
                "no": 23,
                "attributes": [
                    {
                        "text": "Reluctant",
                        "description": "One who is unwilling or struggles against getting involved.",
                        "value": "P"
                    },
                    {
                        "text": "Resentful",
                        "description": "This person easily feels resentment as a result or real or imaged offenses.",
                        "value": "M"
                    },
                    {
                        "text": "Resistant",
                        "description": "One who strives, works against, or resists accepting any other way but his/her own.",
                        "value": "C"
                    },
                    {
                        "text": "Repetitious",
                        "description": "This person retells stories and incidents to entertain you without realizing he/she has already told the story several times before. This is not a question so much of forgetfulness, as it is of constantly needing something to say.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 24,
                "attributes": [
                    {
                        "text": "Fussy",
                        "description": "One who is insistent over petty matters or details, calling for great attention to trivial details.",
                        "value": "M"
                    },
                    {
                        "text": "Fearful",
                        "description": "One who often experiences feelings of fear, apprehension, or anxiousness.",
                        "value": "P"
                    },
                    {
                        "text": "Forgetful",
                        "description": "This person is forgetful because it isn't fun to remember. His/her forgetfulness is tied to a lack of discipline.  There is another personality that is more like the absent-minded professor. This person tends to be off in another world and only remembers what he/she chooses to remember. If you are the latter, do not check this word.",
                        "value": "S"
                    },
                    {
                        "text": "Frank",
                        "description": "One who is straightforward, outspoken, and doesn't mind telling you exactly what he/she thinks.",
                        "value": "C"
                    }
                ]
            },
            {
                "no": 25,
                "attributes": [
                    {
                        "text": "Impatient",
                        "description": "A person who finds it difficult to endure irritation or wait patiently.",
                        "value": "C"
                    },
                    {
                        "text": "Insecure",
                        "description": "One who is apprehensive or lacks confidence.",
                        "value": "M"
                    },
                    {
                        "text": "Indecisive",
                        "description": "This person finds it difficult to make a decision at all.  There is another personality that labors long over each decision in order to make the perfect one.  If you are the latter, do not check this word.",
                        "value": "P"
                    },
                    {
                        "text": "Interrupts",
                        "description": "This person interrupts because he/she is afraid of forgetting the wonderful thing they have to say if another is allowed to finish. This person is more of a talker than a listener.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 26,
                "attributes": [
                    {
                        "text": "Unpopular",
                        "description": "A person whose internally and demand for perfection can push others away.",
                        "value": "M"
                    },
                    {
                        "text": "Uninvolved",
                        "description": "One who has no desire to become involved in clubs, groups, or people activities.",
                        "value": "P"
                    },
                    {
                        "text": "Unpredictable",
                        "description": "This person may be ecstatic one moment and blue the next, willing to help and then disappear, promoting to come and then forgetting to show up.",
                        "value": "S"
                    },
                    {
                        "text": "Unaffectionate",
                        "description": "One who finds it difficult to verbally or physically demonstrate affection openly.",
                        "value": "C"
                    }
                ]
            },
            {
                "no": 27,
                "attributes": [
                    {
                        "text": "Headstrong",
                        "description": "One who insist on having his/her own way.",
                        "value": "C"
                    },
                    {
                        "text": "Haphazard",
                        "description": "One who has no consistent way of doing things.",
                        "value": "S"
                    },
                    {
                        "text": "Hard to Please",
                        "description": "A person whose standards are set so high that it is difficult to ever please them. ",
                        "value": "M"
                    },
                    {
                        "text": "Hesitant",
                        "description": "This person is slow to get moving and hard to get involved.",
                        "value": "P"
                    }
                ]
            },
            {
                "no": 28,
                "attributes": [
                    {
                        "text": "Plain",
                        "description": "The middle-of-the-road personality without highs or lows and showing little if any emotion.",
                        "value": "P"
                    },
                    {
                        "text": "Pessimistic",
                        "description": "This person, while hoping for the best, generally sees the down side of a situation.",
                        "value": "M"
                    },
                    {
                        "text": "Proud",
                        "description": "One with great self-esteem who sees him/herself as always right and the best person for the job.",
                        "value": "C"
                    },
                    {
                        "text": "Permissive",
                        "description": "This personality allows others (including children) to do as they please in order to keep from being disliked.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 29,
                "attributes": [
                    {
                        "text": "Angered easily",
                        "description": "One who has a childlike flash-in-the-pan temper that expresses itself in a child's tantrum style.  It is over and forgotten almost instantly. ",
                        "value": "S"
                    },
                    {
                        "text": "Aimless",
                        "description": "A person who is not a goal-seeker and has little desire to be one.",
                        "value": "P"
                    },
                    {
                        "text": "Argumentative",
                        "description": "One who incites argues generally because he/she is determined to be right no matter what the situation may be.",
                        "value": "C"
                    },
                    {
                        "text": "Alienated",
                        "description": "A person who feels estranged from others often because of insecurity or fear that others don't  really enjoy his/her company.",
                        "value": "M"
                    }
                ]
            },
            {
                "no": 30,
                "attributes": [
                    {
                        "text": "Naive",
                        "description": "A simple childlike perspective, lacking sophistication or worldliness. This is not to be confused with uninformed. There is another personality that is so consumed with his/her own particular field of interest that he/she simply could not care less what is going on outside of that sphere. If you are the latter, do not check this word.",
                        "value": "S"
                    },
                    {
                        "text": "Negative Attitude",
                        "description": "One whose attitude is seldom positive and is often able to see only the down or dark side of each situation.",
                        "value": "M"
                    },
                    {
                        "text": "Nervy",
                        "description": "Full of confidence, fortitude, and sheer guts.",
                        "value": "C"
                    },
                    {
                        "text": "Nonchalant",
                        "description": "Easy-going, unconcerned, indifferent.",
                        "value": "P"
                    }
                ]
            },
            {
                "no": 31,
                "attributes": [
                    {
                        "text": "Worrier",
                        "description": "One who consistently feels uncertain or troubled.",
                        "value": "P"
                    },
                    {
                        "text": "Withdrawn",
                        "description": "A person who pulls back to him/herself and needs a great deal of alone or  isolation time.",
                        "value": "M"
                    },
                    {
                        "text": "Workaholic",
                        "description": "This is one of two workaholic personalities. This particular one is an aggressive goal-setter who must be constantly productive and feels guilty when resting. This workaholic is not driven by a need for perfection or competition but by a need for accomplishment and reward.",
                        "value": "C"
                    },
                    {
                        "text": "Wants Credit",
                        "description": "One who is almost dysfunctional without the credit or approval of others.  As an entertainer this person feeds on the applause, laughter, and/or acceptance of an audience.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 32,
                "attributes": [
                    {
                        "text": "Too sensitive",
                        "description": "One who is overly sensitive and introspective.",
                        "value": "M"
                    },
                    {
                        "text": "Tactless",
                        "description": "A person who can sometimes express him/herself in a somewhat offensive and inconsiderate way.",
                        "value": "C"
                    },
                    {
                        "text": "Timid",
                        "description": "One who shrinks from difficult situations.",
                        "value": "P"
                    },
                    {
                        "text": "Talkative",
                        "description": "A compulsive talker who finds it difficult to listen.  Again, this is an entertaining talker and not a nervous talker.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 33,
                "attributes": [
                    {
                        "text": "Doubtful",
                        "description": "A person who is full of doubts, uncertain.",
                        "value": "P"
                    },
                    {
                        "text": "Disorganized",
                        "description": "One whose lack of organizational ability touches virtually every area of life.",
                        "value": "S"
                    },
                    {
                        "text": "Domineering",
                        "description": "One who compulsively takes control of situations and/or people. Do not consider the mothering role. All mothers are somewhat domineering.",
                        "value": "C"
                    },
                    {
                        "text": "Depressed",
                        "description": "A person who struggles with bouts of depression of a fairly consistent basis.",
                        "value": "M"
                    }
                ]
            },
            {
                "no": 34,
                "attributes": [
                    {
                        "text": "Inconsistent",
                        "description": "Erratic, contradictory, illogical.",
                        "value": "S"
                    },
                    {
                        "text": "Introvert",
                        "description": "A person whose thoughts and interest are directed inward. One who lives within him/herself.",
                        "value": "M"
                    },
                    {
                        "text": "Intolerant",
                        "description": "One who appears unable to withstand or accept another's attitudes, points of view or way of doing things.",
                        "value": "C"
                    },
                    {
                        "text": "Indifferent",
                        "description": "A person to whom most things don't mater one way or the other.",
                        "value": "P"
                    }
                ]
            },
            {
                "no": 35,
                "attributes": [
                    {
                        "text": "Messy",
                        "description": "This person is messy because it isn't fun to discipline him/herself to clean. The mess is hardly noticed. There is another personality that gets messy when depressed, and yet another that is messy because it takes too much energy to do the cleaning. Be sure you are the first one mentioned if you check this word.",
                        "value": "S"
                    },
                    {
                        "text": "Moody",
                        "description": "One easily slips into moods. This person doesn't get very high emotionally, but does experience very low lows.",
                        "value": "M"
                    },
                    {
                        "text": "Mumbles",
                        "description": "This person may mumble quietly under the breath when pushed. This is a passive display of anger.",
                        "value": "P"
                    },
                    {
                        "text": "Manipulative",
                        "description": "One who influences or manages shrewdly or deviously for one's own advantage. One who will find a way to get his/her own way.",
                        "value": "C"
                    }
                ]
            },
            {
                "no": 36,
                "attributes": [
                    {
                        "text": "Slow",
                        "description": "One who is slow-moving, easy-going.",
                        "value": "P"
                    },
                    {
                        "text": "Stubborn",
                        "description": "A person who is determined to exert his/her own will. Not easily persuaded; obstinate.",
                        "value": "C"
                    },
                    {
                        "text": "Show-off",
                        "description": "One who needs to be the center of attention.",
                        "value": "S"
                    },
                    {
                        "text": "Skeptical",
                        "description": "Disbelieving, questioning the motive behind the words.",
                        "value": "M"
                    }
                ]
            },
            {
                "no": 37,
                "attributes": [
                    {
                        "text": "Loner",
                        "description": "One who requires a lot of alone time and tends to avoid other people.",
                        "value": "M"
                    },
                    {
                        "text": "Lord over others",
                        "description": "A person who doesn't hesitate to let you know that he/she is right or has won.",
                        "value": "C"
                    },
                    {
                        "text": "Lazy",
                        "description": "One who evaluates work or activity in terms of how much energy it will take.",
                        "value": "P"
                    },
                    {
                        "text": "Loud",
                        "description": "A person whose laugh or voice can be heard above others in the room.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 38,
                "attributes": [
                    {
                        "text": "Sluggish",
                        "description": "Slow to get started.",
                        "value": "P"
                    },
                    {
                        "text": "Suspicious",
                        "description": "One who tends to suspect or distrust.",
                        "value": "M"
                    },
                    {
                        "text": "Short-tempered",
                        "description": "One who has a demanding impatience-based anger and a very short fuse. This type of anger is expressed when others are not moving fast enough or have not completed what they have been asked to do.",
                        "value": "C"
                    },
                    {
                        "text": "Scatterbrained",
                        "description": "A person lacking the power of concentration, or attention. Flightily.",
                        "value": "S"
                    }
                ]
            },
            {
                "no": 39,
                "attributes": [
                    {
                        "text": "Revengeful",
                        "description": "One who knowingly or otherwise holds a grudge and punishes the offender, often by subtly withholding friendship or affection.",
                        "value": "M"
                    },
                    {
                        "text": "Restless",
                        "description": "A person who likes constant new activity because it isn't fun to do the same things all the time.",
                        "value": "S"
                    },
                    {
                        "text": "Reluctant",
                        "description": "One who is unwilling or struggles against getting involved.",
                        "value": "P"
                    },
                    {
                        "text": "Rash",
                        "description": "One who may act hastily, without thinking things through, generally because of impatience.",
                        "value": "C"
                    }
                ]
            },
            {
                "no": 40,
                "attributes": [
                    {
                        "text": "Compromising",
                        "description": "A person who will often compromise, even when he/she is right, in order to avoid conflict.",
                        "value": "P"
                    },
                    {
                        "text": "Critical",
                        "description": "One who constantly evaluates and makes judgment. Example: One who is critical might see someone coming down the street and within seconds might try to evaluate their cleanliness, look of intelligence or lack of it, style of clothing or lack of it, physical attractiveness or lack of it, and the list goes on. This person constantly analyzes and critiques, sometimes without realizing that he/she is doing so.",
                        "value": "M"
                    },
                    {
                        "text": "Crafty",
                        "description": "Shrewd, one who can always find a way to get to the desired end.",
                        "value": "C"
                    },
                    {
                        "text": "Changeable",
                        "description": "A person with a childlike short attention span that needs a lot of change and variety to keep from getting bored.",
                        "value": "S"
                    }
                ]
            }
        ],
        answers: [],
        activeQuestion: null
    },
    getters: {
        results: state => {
            return {
                'Melancholy': state.answers.filter(a => { return a.value == "M"; }).length,
                'Sanguine': state.answers.filter(a => { return a.value == "S"; }).length,
                'Choleric': state.answers.filter(a => { return a.value == "C"; }).length,
                'Phlegmatic': state.answers.filter(a => { return a.value == "P"; }).length,
            }
        },
        answer: state => {
            return state.activeQuestion ? state.answers.find(a => {return a.no == state.activeQuestion.no}) : null;
        },
        remaining: state => {
            return 40 - state.answers.length;
        }
    },
    mutations: {
        resetForm(state) {
            state.answers = [];
        },
        setQuestion(state, number) {
            state.activeQuestion = state.questions.find(q => {return q.no == number });
        },
        saveAnswer(state, data) {
            var matchingEntry = state.answers.find(a => {return a.no == data.no});

            if (matchingEntry) {
                matchingEntry.value = data.selection.value
            } else {
                state.answers.push({
                    no: data.no,
                    value: data.selection.value
                });
            }
        }
    }
});