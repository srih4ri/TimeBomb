import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    ListView,
} from 'react-native';

import TaskRow from './taskRow'

const styles = StyleSheet.create({
    content: {
        paddingTop: 60,
        flex: 1,
    },
    timer: {
        flex: 0.2,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    timerText: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 64,
        color: '#808080',
        textAlign: 'center',
    },
    startTimerButton: {
        flex: 0.07,
        backgroundColor: '#27AE60',
        justifyContent: 'center'
    },
    startTimerText: {
        fontFamily: 'HelveticaNeue',
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    taskListContainer: {
        flex: 0.4,
        justifyContent: 'center',
        padding: 5,
        marginTop: 20
    },
    taskHeader: {
        padding: 10,
        flex: 0.1,
        flexDirection: 'row',
     },
    taskHeading: {
        flex: 0.8,
        fontSize: 16,
        letterSpacing: 1.45,
        color: '#27AE60',
        fontWeight: 'bold',
    },
    plusIcon: {
        fontFamily: 'FontAwesome',
        fontSize: 22,
        color: '#27AE60',
        fontWeight: '900',
        flex: 0.07,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    taskList: {},
    separator: {
        height: 1,
        backgroundColor: '#EEEEEE'
    },
})

class ProjectShow extends React.Component {

    state = {
        tasksList: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.project.tasks)
    }

    _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={styles.separator}
            />
        )
    }

    render() {
        return (
            <View style={styles.content}>
                <View style={styles.timer}>
                    <Text style={styles.timerText}>
                        00:00:00
                    </Text>
                </View>
                <View style={styles.startTimerButton}>
                    <TouchableHighlight style={styles.startTimerTouchable}>
                        <Text style={styles.startTimerText}>START TIMER</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.taskListContainer}>
                    <View style={styles.taskHeader}>
                        <Text style={styles.taskHeading}>TASKS</Text>
                        <Text style={styles.plusIcon}></Text>
                    </View>
                    <ListView
                        dataSource={this.state.tasksList}
                        automaticallyAdjustContentInsets={false}
                        renderRow={(task) => <TaskRow task={task}/>}
                        renderSeparator={this._renderSeparator}
                        style={styles.taskList}/>
                </View>
            </View>
        )
    }
}
;


export default ProjectShow;
