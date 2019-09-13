import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CheckDorUpdateService } from './check-dor-update.service';
import { LogUpdateService } from './log-update.service';
import { PromptUpdateService } from './prompt-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('appShell', { static: true }) appShell;

  constructor(
    c: CheckDorUpdateService,
    l: LogUpdateService,
    p: PromptUpdateService,
    private viewContainerRef: ViewContainerRef) {

  }
  night = new Audio('../assets/night.mp3');
  morning = new Audio('../assets/morning.mp3');
  werewolfUp = new Audio('../assets/werewolfUp.mp3');
  werewolfFirend = new Audio('../assets/werewolfFirend.mp3');
  werewolfKill = new Audio('../assets/werewolfKill.mp3');
  werewolfSleep = new Audio('../assets/werewolfSleep.mp3');
  witchUp = new Audio('../assets/witchUP.mp3');
  witchSave = new Audio('../assets/witchSave.mp3');
  witchKill = new Audio('../assets/witchKill.mp3');
  witchSleep = new Audio('../assets/witchSleep.mp3');
  prophetUp = new Audio('../assets/prophetUp.mp3');
  prophetSleep = new Audio('../assets/prophetSleep.mp3');
  hunterUp = new Audio('../assets/hunterUp.mp3');
  hunterSleep = new Audio('../assets/hunterSleep.mp3');
  knightUp = new Audio('../assets/knightUp.mp3');
  knightSleep = new Audio('../assets/knightSleep.mp3');
  guardUp = new Audio('../assets/guardUp.mp3');
  guardSleep = new Audio('../assets/guardSleep.mp3');

  werewolf = [
    'wLive',
    'wLive',
    'wLive'
  ];
  normal = [
    'normal',
    'normal',
    'normal'
  ];
  witchLife = true;
  prophetLife = true;
  hunterLife = true;
  knightLife = true;
  guardLife = true;

  title = 'werewolfkill';

  ngOnInit(): void {
    const a = this.viewContainerRef.createEmbeddedView(this.appShell);

    this.night.load();
    this.morning.load();
    this.werewolfUp.load();
    this.werewolfFirend.load();
    this.werewolfKill.load();
    this.werewolfSleep.load();
    this.witchUp.load();
    this.witchSave.load();
    this.witchKill.load();
    this.witchSleep.load();
    this.prophetUp.load();
    this.prophetSleep.load();
    this.hunterUp.load();
    this.hunterSleep.load();
    this.knightUp.load();
    this.knightSleep.load();
    this.guardUp.load();
    this.guardSleep.load();
  }

  play(name) {
    this[name].play();
  }

  toggleWereWolf(index: number) {
    this.werewolf[index] = this.werewolf[index] === 'wLive' ? 'wKill' : 'wLive';
  }
  toggleNormal(index: number) {
    this.normal[index] = this.normal[index] === 'normal' ? 'die' : 'normal';
  }

  addNormal() {
    this.normal.push('normal');
  }

  get getWereWolfKillCount() {
    return this.werewolf.filter(type => type === 'wKill').length;
  }
  get getNormalKillCount() {
    return this.normal.filter(type => type === 'die').length;
  }
}
